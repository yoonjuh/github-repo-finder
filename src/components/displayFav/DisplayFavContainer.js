import React from 'react'
import Styled from 'styled-components'
import Refos from '../resuable/Refos'

const DisplayFavContainerWrapper = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  background-color: #F6E7FF;
  padding: 1rem 5rem;
`

const DisplayFavContainer = ({ favRefos }) => (
  <DisplayFavContainerWrapper>
    <Refos items={favRefos} />
  </DisplayFavContainerWrapper>
)
DisplayFavContainer.defaultProps = {
  items: [
    {
      name: 'something',
      language: 'some languages',
      tag: 'something',
    },
  ],
}

export default DisplayFavContainer
