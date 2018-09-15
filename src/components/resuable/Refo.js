import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

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
const Name = Styled(Commons)``
const Language = Styled(Commons)``
const Tag = Styled(Commons)``
const AddButton = Styled.div`
  font-size: 1.3rem;
`

const Refo = ({ item: { name, language, tag } }) => (
  <RefoWrapper>
    <Name>{name}</Name>
    <Language>{language}</Language>
    <Tag>{tag}</Tag>
    <AddButton>Add</AddButton>
  </RefoWrapper>
)

export default Refo

Refo.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
}
