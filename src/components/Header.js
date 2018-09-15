import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const HeaderWrapper = Styled.div`
  width: 100%;
  min-width: 15rem;
  padding: 1.5rem 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  background-color: #9100F6;
  color: #FFFFFF;
  white-space: nowrap;
`

const Header = ({ name = '' }) => <HeaderWrapper>{name}</HeaderWrapper>

export default Header

Header.propTypes = {
  name: PropTypes.string.isRequired,
}
