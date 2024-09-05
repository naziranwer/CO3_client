// graphql/operations.ts
import { gql } from "@apollo/client";

export const GET_USER_COINS = gql`
  query GetUserCoins($email: String!) {
    getUser(email: $email) {
      coins
    }
  }
`;

export const TAP_COIN_MUTATION = gql`
  mutation TapCoin($email: String!) {
    tapCoin(email: $email)
  }
`;
