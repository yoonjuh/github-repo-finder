import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { ADD_STAR } from '../../../documents/mutation/AddStar'
import { SEARCH_REFO } from '../../../documents/query/SearchQuery'
import RepoName from '../../../components/RepoName'
import RepoLanguage from '../../../components/RepoLanguage'
import RepoTag from '../../../components/RepoTag'
import Button from '../../../components/Button'

const RefoWrapper = Styled.div`
  display: flex;
`
const RepoItem = ({ item, button, term, onAdd }) => (
  <Mutation
    mutation={ADD_STAR}
    variables={{ repoId: item.id }}
    // Start update logic =========================================================
    update={(
      cache,
      {
        data: {
          addStar: { starrable },
        },
      }
    ) => {
      // Get Cache data
      const data = cache.readQuery({ query: SEARCH_REFO, variables: { term } })

      // Destructuring
      const { edges } = data.search

      // Edit the cache just read
      const filtered = edges.map(edge => {
        if (edge.node.id === starrable.id) {
          edge.node.viewerHasStarred = true
        }
        return edge
      })

      // Updte the current cache
      cache.writeQuery({
        query: SEARCH_REFO,
        variables: { term },
        data: { search: { ...data.search, edges: filtered } },
      })
    }}
    // End of update Logic ===================================================
  >
    {(addStar, { data }) => {
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
            mutationHandler={addStar}
            stateHandler={onAdd}
            item={item}
          />
        </RefoWrapper>
      )
    }}
  </Mutation>
)
export default RepoItem

RepoItem.propTypes = {
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
  onAdd: PropTypes.func.isRequired,
}
