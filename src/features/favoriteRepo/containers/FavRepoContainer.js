import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import FavList from '../components/FavList'

const ContainerWrapper = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  background-color:#f0ecfd;
  padding: 1rem 5rem;
`

const FavRepoContainer = ({ items, onRemove, term }) => (
  <ContainerWrapper>
    <FavList items={items} button="Remove" onRemove={onRemove} term={term} />
  </ContainerWrapper>
)

export default FavRepoContainer

FavRepoContainer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
}
