import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const Tag = Styled.div`
  flex: 1;
  font-size: 1.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  // padding: 0 .3rem;
`

const RepoTag = ({ releases }) => (
  <Tag>{releases.nodes.length > 0 && releases.nodes[0].name !== null ? releases.nodes[0].name : '-'}</Tag>
)
export default RepoTag

RepoTag.propTypes = {
  releases: PropTypes.shape({
    nodes: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
      PropTypes.shape({ name: PropTypes.string.isRequired }),
    ]),
  }).isRequired,
}
