import { gql } from 'graphql-tag'

const LOGIN = gql`
  mutation Test($email: String, $password: String) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`
export default LOGIN
