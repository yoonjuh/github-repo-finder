import React from 'react'
import { Mutation } from 'react-apollo'
import Styled from 'styled-components'
import { REMOVE_STAR } from '../../mutations/index'
import { SEARCH_REFO } from '../../queries/QueryTypes'
import RepoName from '../resuable/RepoName'
import RepoLanguage from '../resuable/RepoLanguage'
import RepoTag from '../resuable/RepoTag'
import Button from '../resuable/Button'

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

const FavItem = ({ item, button, term, onRemove }) => (
  <Mutation
    mutation={REMOVE_STAR}
    variables={{ repoId: item.id }}
    refetchQueries={[{ query: SEARCH_REFO, variables: { term } }]}
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
          <Button buttonName="Remove" isAdded={viewerHasStarred} />
          {/* <AddButton
            isAdded={viewerHasStarred}
            onClick={() => {
              removeStar(item.id)
              onRemove(item.id)
            }}
          >
            {button}
          </AddButton> */}
        </RefoWrapper>
      )
    }}
  </Mutation>
)

export default FavItem
