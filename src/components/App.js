import React from 'react'
import Styled from 'styled-components'
import Header from './Header'
import DisplayRefoContainer from './displayRefo/DisplayRefoContainer'
import DisplayFavContainer from './displayFav/DisplayFavContainer'

const AppContainer = Styled.div`
  display: flex;
  flex-direction: column;
`
const ContentsWrapper = Styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`
const dummy = [
  {
    name: 'React',
    language: 'Javascript',
    tag: 'Facebook',
  },
  {
    name: 'Go',
    language: 'GOOOOOOOOO',
    tag: 'Google',
  },
  {
    name: 'Netflex',
    language: 'Javascript',
    tag: 'Awesome',
  },
]

const App = () => (
  <AppContainer>
    <Header name="My Github Favorites" />
    <ContentsWrapper>
      <DisplayRefoContainer refoList={dummy} />
      <DisplayFavContainer favRefos={dummy} />
    </ContentsWrapper>
  </AppContainer>
)

export default App
