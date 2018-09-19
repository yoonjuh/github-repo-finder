import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { ADD_STAR } from '../../mutations'
import { SEARCH_REFO } from '../../queries/QueryTypes'
import RepoName from './RepoName'
import RepoLanguage from './RepoLanguage'

const RefoWrapper = Styled.div`
  display: flex;
`
const Commons = Styled.div`
  flex: 1;
  font-size: 1.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 .3rem;
`
// const Name = Styled(Commons)``
const Name = Styled.a`
  flex: 1;
  font-size: 1.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 .3rem;
  text-decoration: none;
  color: black;
`
const Language = Styled(Commons)``
const Tag = Styled(Commons)``
const AddButton = Styled.div`
  visibility: ${({ isAdded }) => (isAdded ? 'hidden' : 'visible')}
  font-size: 1.3rem;
  text-decoration: underline;
  color: blue;
  :active, :after {
    color: violet;
  }
`

const RepoItem = ({ item, button, term, onAdd }) => (
  <Mutation
    mutation={ADD_STAR}
    variables={{ repoId: item.id }}
    refetchQueries={[{ query: SEARCH_REFO, variables: { term } }]}
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
          <Tag>{releases.nodes.length > 0 && releases.nodes[0].name ? releases.nodes[0].name : '-'}</Tag>
          <AddButton
            isAdded={viewerHasStarred}
            onClick={() => {
              addStar(item.id)
              onAdd(item)
            }}
          >
            {button}
          </AddButton>
        </RefoWrapper>
      )
    }}
  </Mutation>
)
export default RepoItem

// Refo.propTypes = {
//   item: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     primaryLanguage: PropTypes.string.isRequired,
//     // tag: PropTypes.string.isRequired,
//   }).isRequired,
// }
