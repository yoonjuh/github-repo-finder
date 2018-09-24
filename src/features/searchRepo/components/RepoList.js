import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import ColumnInfo from '../../../components/ColumnInfo'
import RepoItem from './RepoItem'

const ListContainer = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const RepoList = ({ items, button, term, onAdd }) => (
  <ListContainer>
    <ColumnInfo button={button} />
    {items && items.map(({ node }) => <RepoItem item={node} key={node.id} button={button} term={term} onAdd={onAdd} />)}
  </ListContainer>
)
export default RepoList

RepoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
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
      }),
    }).isRequired
  ).isRequired,
  button: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
}
