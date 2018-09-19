import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import ColumnInfo from '../resuable/ColumnInfo'
import FavItem from './FavItem'

const ListContainer = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const FavList = ({ items, button, term, onRemove }) => (
  <ListContainer>
    <ColumnInfo />
    {items && items.map(item => <FavItem item={item} key={item.id} button={button} term={term} onRemove={onRemove} />)}
  </ListContainer>
)
export default FavList

// Refos.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       language: PropTypes.string,
//       tag: PropTypes.string,
//     })
//   ).isRequired,
// }
