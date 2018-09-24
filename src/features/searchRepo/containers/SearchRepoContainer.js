import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { SEARCH_REFO } from '../../../documents/query/SearchQuery'
import SearchRefo from '../components/SearchRefo'
import RepoList from '../components/RepoList'
import ColumnInfo from '../../../components/ColumnInfo'

const ContainerWrapper = Styled.div`
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

const SearchRepoContainer = ({ term, onChange, toggler, onSearch, onKeyPress, onAdd }) => (
  <ContainerWrapper>
    <SearchRefo term={term} onChange={onChange} onSearch={onSearch} onKeyPress={onKeyPress} />
    {toggler ? (
      <ColumnInfo button="Add" />
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
  </ContainerWrapper>
)
export default SearchRepoContainer

SearchRepoContainer.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  toggler: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
}
