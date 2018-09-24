import gql from 'graphql-tag'

export const ADD_STAR = gql`
  mutation addStar($repoId: ID!) {
    addStar(input: { starrableId: $repoId }) {
      starrable {
        id
      }
    }
  }
`
