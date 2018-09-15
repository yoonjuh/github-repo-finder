import React from 'react'
import Styled from 'styled-components'
import SearchRefo from './SearchRefo'
import Refos from '../resuable/Refos'

const DisplayRefoContainerWrapper = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  @media (max-width: 45rem){
    padding: 1rem 1rem;
  }

  @media (min-width: 45rem){
    padding: 3rem 4rem;
  }
`

const DisplayRefoContainer = ({ refoList }) => (
  <DisplayRefoContainerWrapper>
    <SearchRefo />
    <Refos items={refoList} />
  </DisplayRefoContainerWrapper>
)
export default DisplayRefoContainer
