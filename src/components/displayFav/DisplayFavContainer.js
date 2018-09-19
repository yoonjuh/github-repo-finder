import React from 'react'
import Styled from 'styled-components'
import FavList from './FavList'
import FavItem from './FavItem'

const DisplayFavContainerWrapper = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  background-color:#f0ecfd;
  padding: 1rem 5rem;
`

const DisplayFavContainer = ({ favRepos, onRemove, term }) => (
  <DisplayFavContainerWrapper>
    <FavList items={favRepos} button="Remove" onRemove={onRemove} term={term} />
  </DisplayFavContainerWrapper>
)

export default DisplayFavContainer
