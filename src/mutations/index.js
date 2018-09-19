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
export const REMOVE_STAR = gql`
  mutation removeStar($repoId: ID!) {
    removeStar(input: { starrableId: $repoId }) {
      starrable {
        id
      }
    }
  }
`
