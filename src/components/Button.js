import React from 'react'
import PropTypes from 'prop-types'
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

const Button = ({ buttonName, isAdded, mutationHandler, stateHandler, item }) => (
  <ButtonContainer
    onClick={() => {
      mutationHandler(item.id)
      stateHandler(item)
    }}
    isAdded={isAdded}
  >
    {buttonName}
  </ButtonContainer>
)

export default Button

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  isAdded: PropTypes.bool.isRequired,
  mutationHandler: PropTypes.func.isRequired,
  stateHandler: PropTypes.func.isRequired,
  item: PropTypes.shape({
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
  }).isRequired,
}
