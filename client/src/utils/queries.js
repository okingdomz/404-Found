import { gql } from "@apollo/client";

<<<<<<< HEAD
export const QUERY_USERS = gql`
query user {
    _id
    username
    email
    orders {
      games {
        _id
        name
      }
=======
export const QUERY_CHECKOUT = gql`
  query getCheckout($games: [ID]!) {
    checkout(games: $games) {
      session
    }
  }
`;

export const QUERY_GAMES = gql`
  query getGames($category: ID) {
    games(category: $category) {
      _id
      name
      description
      price
      image
>>>>>>> cff0e2cb0ac5ec69bba2aa08bb069f4fe75cccd4
    }
  }
`;