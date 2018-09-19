import React, { Component } from 'react'
import Styled from 'styled-components'
import { compose, withState, withHandlers } from 'recompose'
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

class App extends Component {
  state = {
    term: '',
    queryToggler: true,
    addedRepo: [],
  }

  onChange = e => this.setState({ term: e.target.value, queryToggler: true })

  onSearch = () => this.setState(({ queryToggler }) => ({ queryToggler: !queryToggler }))

  onKeyPress = e => (e.charCode === 13 ? this.onSearch() : null)

  onAdd = added => {
    this.setState(({ addedRepo }) => ({ addedRepo: [...addedRepo, added] }))
  }

  onRemove = id => {
    this.setState(({ addedRepo }) => ({ addedRepo: addedRepo.filter(repo => repo.id !== id) }))
  }

  render() {
    const { term, queryToggler, addedRepo } = this.state
    return (
      <AppContainer>
        <Header name="My Github Favorites" />
        <ContentsWrapper>
          <DisplayRefoContainer
            term={term}
            onChange={this.onChange}
            toggler={queryToggler}
            onSearch={this.onSearch}
            onKeyPress={this.onKeyPress}
            onAdd={this.onAdd}
          />
          <DisplayFavContainer favRepos={addedRepo} onRemove={this.onRemove} term={term} />
        </ContentsWrapper>
      </AppContainer>
    )
  }
}
export default App

// export default ({ term, queryToggler }) => (
//   <Query query={SEARCH_REFO} variables={term} skip={queryToggler}>
//     {({ loading, error, data }) => {
//       if (loading) return null
//       if (error) return `Error: ${error}`
//       return <App data={data} />
//     }}
//   </Query>

// const enhance = compose(
//   withState('term', 'updateValue', ''),
//   withHandlers({
//     onChange: props => e => props.updateValue(e.target.value),
//   })
// )

// export default graphql(SEARCH_REFO, {
//   options: props => ({
//     variables: { term: props.term, queryToggler: props.queryToggler },
//   }),
// })(App)

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
