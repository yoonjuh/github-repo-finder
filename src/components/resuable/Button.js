import React from 'react'
import Styled from 'styled-components'

const ButtonContainer = Styled.div`
  visibility: ${({ isAdded }) => (isAdded ? 'hidden' : 'visible')}
  font-size: 1.3rem;
  text-decoration: underline;
  color: blue;
  :active, :after {
    color: violet;
  }
`

const Button = ({ buttonName, isAdded }) => (
  <ButtonContainer isAdded={isAdded}>{buttonName}</ButtonContainer>
)

export default Button