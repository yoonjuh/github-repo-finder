import React, { Component } from 'react'
import Styled from 'styled-components'
import Header from './Header'
import FavRepoContainer from '../features/favoriteRepo/containers/FavRepoContainer'
import SearchRepoContainer from '../features/searchRepo/containers/SearchRepoContainer'

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
class App extends Component {
  state = {
    term: '',
    queryToggler: true,
    addedRepo: [],
  }

  onChange = e => this.setState({ term: e.target.value, queryToggler: true })

  onSearch = () => this.setState({ queryToggler: false })

  onKeyPress = e => (e.charCode === 13 ? this.onSearch() : null)

  onAdd = added => this.setState(({ addedRepo }) => ({ addedRepo: [...addedRepo, added] }))

  onRemove = item => this.setState(({ addedRepo }) => ({ addedRepo: addedRepo.filter(repo => repo.id !== item.id) }))

  render() {
    const { term, queryToggler, addedRepo } = this.state
    return (
      <AppContainer>
        <Header name="My Github Favorites" />
        <ContentsWrapper>
          <SearchRepoContainer
            items={addedRepo}
            term={term}
            onChange={this.onChange}
            toggler={queryToggler}
            onSearch={this.onSearch}
            onKeyPress={this.onKeyPress}
            onAdd={this.onAdd}
          />
          <FavRepoContainer items={addedRepo} onRemove={this.onRemove} term={term} />
        </ContentsWrapper>
      </AppContainer>
    )
  }
}
export default App
