import React from 'react'
import Styled from 'styled-components'

const ColumnNameWrapper = Styled.div`
  height: 2.5rem;
  display: flex;
  margin: 3rem 2.4rem .5rem 0;
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
const ColumnInfo = ({ items = ['Name', 'Language', 'Latest tag'] }) => (
  <ColumnNameWrapper>
    {items.map(item => (
      <ColName key={item}>{item}</ColName>
    ))}
  </ColumnNameWrapper>
)

export default ColumnInfo
