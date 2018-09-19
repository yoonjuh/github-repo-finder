import React from 'react'
import Styled from 'styled-components'

const Language = Styled.div`
  flex: 1;
  font-size: 1.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 .3rem;
`

const RepoLanguage = ({ language }) => <Language>{language ? language.name : '-'}</Language>

export default RepoLanguage
