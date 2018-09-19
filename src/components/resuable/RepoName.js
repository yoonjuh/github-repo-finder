import React from 'react'
import Styled from 'styled-components'

const Name = Styled.a`
  flex: 1;
  font-size: 1.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 .3rem;
  text-decoration: none;
  color: black;
`
const RepoName = ({ path, name, owner }) => (
  <Name href={`https://github.com${path}`} target="_blank">{`${name}/${owner}`}</Name>
)
export default RepoName
