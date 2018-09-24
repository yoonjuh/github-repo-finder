import React from 'react'
import { Mutation } from 'react-apollo'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { REMOVE_STAR } from '../../../documents/mutation/RemoveStar'
import { SEARCH_REFO } from '../../../documents/query/SearchQuery'
import RepoName from '../../../components/RepoName'
import RepoLanguage from '../../../components/RepoLanguage'
import RepoTag from '../../../components/RepoTag'
import Button from '../../../components/Button'

const RefoWrapper = Styled.div`
  display: flex;
`

const FavItem = ({ item, button, term, onRemove }) => (
  <Mutation
    mutation={REMOVE_STAR}
    variables={{ repoId: item.id }}
    // Start of the UPDATE logic ================================================
    update={(
      cache,
      {
        data: {
          removeStar: { starrable },
        },
      }
    ) => {
      const data = cache.readQuery({ query: SEARCH_REFO, variables: { term } })
      const { edges } = data.search
      const filtered = edges.map(edge => {
        if (edge.node.id === starrable.id) {
          edge.node.viewerHasStarred = false
        }
        return edge
      })

      cache.writeQuery({
        query: SEARCH_REFO,
        variables: { term },
        data: { search: { ...data.search, edges: filtered } },
      })
    }}
    // End of UPDATE logic ======================================================
  >
    {(removeStar, { data }) => {
      const {
        resourcePath,
        name,
        owner: { login },
        viewerHasStarred,
        releases,
        primaryLanguage,
      } = item
      return (
        <RefoWrapper>
          <RepoName path={resourcePath} name={name} owner={login} />
          <RepoLanguage language={primaryLanguage} />
          <RepoTag releases={releases} />
          <Button
            buttonName={button}
            isAdded={viewerHasStarred}
            mutationHandler={removeStar}
            item={item}
            stateHandler={onRemove}
          />
        </RefoWrapper>
      )
    }}
  </Mutation>
)

export default FavItem

FavItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    resourcePath: PropTypes.string.isRequired,
    primaryLanguage: PropTypes.shape({
      name: PropTypes.string,
    }),
    releases: PropTypes.shape({
      node: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ),
    }),
    owner: PropTypes.shape({
      login: PropTypes.string.isRequired,
    }).isRequired,
    viewerHasStarred: PropTypes.bool.isRequired,
  }).isRequired,
  button: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
}
