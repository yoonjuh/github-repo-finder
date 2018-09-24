import gql from 'graphql-tag'

export const SEARCH_REFO = gql`
  query($term: String!) {
    search(query: $term, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            id
            resourcePath
            releases(first: 1, orderBy: { field: CREATED_AT, direction: DESC }) {
              nodes {
                name
              }
            }
            owner {
              login
            }
            primaryLanguage {
              name
            }
            viewerHasStarred
          }
        }
      }
    }
  }
`
