import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const ColumnNameWrapper = Styled.div`
  height: 2.5rem;
  display: flex;
  margin: ${({ button }) => (button === 'Add' ? '3rem 2.4rem .5rem 0' : '3rem 4.7rem .5rem 0')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

`
const ColName = Styled.div`
  flex: 1;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0 .3rem;
`
const ColumnInfo = ({ items, button }) => (
  <ColumnNameWrapper button={button}>
    {items.map(item => (
      <ColName key={item}>{item}</ColName>
    ))}
  </ColumnNameWrapper>
)

export default ColumnInfo

ColumnInfo.defaultProps = {
  items: ['Name', 'Language', 'Latest Tag'],
}
ColumnInfo.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  button: PropTypes.string.isRequired,
}
