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
//   allBooks(author: author, genre: genre) {
//   }
