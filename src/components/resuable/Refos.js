import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import ColumnInfo from './ColumnInfo'
import ListItem from './Refo'

const ListContainer = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Refos = ({ items }) => (
  <ListContainer>
    <ColumnInfo />
    {items.map(item => (
      <ListItem item={item} key={item.name} />
    ))}
  </ListContainer>
)
export default Refos

Refos.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      language: PropTypes.string,
      tag: PropTypes.string,
    })
  ).isRequired,
}
