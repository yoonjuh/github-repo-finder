import React from 'react'
import Styled from 'styled-components'

const Tag = Styled.div`
  flex: 1;
  font-size: 1.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  // padding: 0 .3rem;
`

const RepoTag = ({ releases }) => (
  <Tag>{releases.nodes.length > 0 && releases.nodes[0].name ? releases.nodes[0].name : '-'}</Tag>
)

export default RepoTag