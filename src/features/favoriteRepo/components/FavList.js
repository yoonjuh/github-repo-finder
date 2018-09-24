import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import ColumnInfo from '../../../components/ColumnInfo'
import FavItem from './FavItem'

const ListContainer = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const FavList = ({ items, button, term, onRemove }) => (
  <ListContainer button={button}>
    <ColumnInfo button={button} />
    {items && items.map(item => <FavItem item={item} key={item.id} button={button} term={term} onRemove={onRemove} />)}
  </ListContainer>
)
export default FavList

FavList.propTypes = {
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
  button: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
}
