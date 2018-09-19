import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import ColumnInfo from './ColumnInfo'
import RepoItem from './RepoItem'

const ListContainer = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const RepoList = ({ items, button, term, onAdd }) => (
  <ListContainer>
    <ColumnInfo />
    {items && items.map(({ node }) => <RepoItem item={node} key={node.id} button={button} term={term} onAdd={onAdd} />)}
  </ListContainer>
)
export default RepoList

// Refos.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       language: PropTypes.string,
//       tag: PropTypes.string,
//     })
//   ).isRequired,
// }
