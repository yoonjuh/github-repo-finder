import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { withState, withHandlers, compose } from 'recompose'

const SearchContainer = Styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Input = Styled.input.attrs({
  type: 'text',
  value: ({ term }) => term,
  onChange: ({ onChange }) => onChange,
})`
  width: 77%;
  height: 4rem;
  border: .1rem black solid;
  border-radius: .3rem;
  font-size: 1.7rem;
  padding: 0 1.5rem;
`
const SearchButton = Styled.button`
  min-width: min-content;
  width: 20%;
  height: 4rem;
  font-size: 1.5rem;
  background-color: #9100F6;
  color: #FFFFFF;
  padding: .5rem .5rem;
  border: .1rem #C277E8 solid;
  border-radius: .3rem;
  transition: all .3s ease-out;
  :hover{
    background-color: white;
    color: #9100F6;
    transition: all .3s ease-in;
  }
`

const SearchRefo = ({ term, onChange }) => (
  <SearchContainer>
    <Input type="text" value={term} onChange={onChange} />
    <SearchButton>Search</SearchButton>
  </SearchContainer>
)

export default compose(
  withState('term', 'updateValue', ''),
  withHandlers({ onChange: props => e => props.updateValue(e.target.value) })
)(SearchRefo)

SearchRefo.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
