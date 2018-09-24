import gql from 'graphql-tag'

export const REMOVE_STAR = gql`
  mutation removeStar($repoId: ID!) {
    removeStar(input: { starrableId: $repoId }) {
      starrable {
        id
      }
    }
  }
`
