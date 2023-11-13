import { gql } from '@apollo/client'

// export const ALL_AUTHORS = gql`
//   query {
//     allAuthors {
//       name
//       born
//       bookCount
//       id
//     }
//   }
// `
// export const ALL_BOOKS = gql`
//   query allBooks($author: String, $genre: String) {
//     allBooks(author: $author, genre: $genre) {
//       title
//       published
//       author
//       genres
//       id
//     }
//   }
// `

export const ALL_DATA = gql`
  query allData($author: String, $genre: String) {
    allAuthors {
      name
      born
      bookCount
      id
    }
    allBooks(author: $author, genre: $genre) {
      title
      published
      author
      genres
      id
    }
  }
`

export const CREATE_BOOK = gql`
  mutation createBook(
    $title: String!
    $author: String!
    $published: String!
    $genres: [String!]!
  ) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      title
      author
      published
      genres
      id
    }
  }
`

export const EDIT_AUTHOR = gql`
  mutation editAuthor($name: String!, $setBornTo: String!) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      born
      bookCount
      id
    }
  }
`

//   allBooks(author: author, genre: genre) {
//   }
