import React from 'react'
import Styled from 'styled-components'
import { Query } from 'react-apollo'
import { SEARCH_REFO } from '../../queries/QueryTypes'
import SearchRefo from './SearchRefo'
import RepoList from '../resuable/RepoList'
import ColumnInfo from '../resuable/ColumnInfo'

const DisplayRefoContainerWrapper = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  @media (max-width: 45rem){
    padding: 1rem 1rem;
  }

  @media (min-width: 45rem){
    padding: 3rem 4rem;
  }
`

const DisplayRefoContainer = ({ term, onChange, toggler, onSearch, onKeyPress, onAdd }) => (
  <DisplayRefoContainerWrapper>
    <SearchRefo term={term} onChange={onChange} onSearch={onSearch} onKeyPress={onKeyPress} />
    {toggler ? (
      <ColumnInfo />
    ) : (
      <Query query={SEARCH_REFO} variables={{ term }} skip={toggler} fetchPolicy="cache-and-network">
        {({ loading, error, data }) => {
          if (loading) return null
          if (error) return `Error: ${error}`
          const { edges } = data.search
          return <RepoList items={edges} button="Add" term={term} onAdd={onAdd} />
        }}
      </Query>
    )}
  </DisplayRefoContainerWrapper>
)
export default DisplayRefoContainer
