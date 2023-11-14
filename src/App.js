import { useState, useEffect } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { useQuery } from '@apollo/client'
import { ALL_DATA } from './queries'
import Notify from './components/Notify'

const App = () => {
  const [page, setPage] = useState('authors')
  const [errorMessage, setErrorMessage] = useState(null)

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }

  const result = useQuery(ALL_DATA, {
    // pollInterval: 2000,
  })
  console.log(result)

  // useEffect(() => {
  //   if (result.data && result.data.editAuthor === null) {
  //     setError('person not found')
  //   }
  // }, [result.data])

  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>
      <Notify errorMessage={errorMessage} />
      <Authors show={page === 'authors'} authors={result.data.allAuthors} />

      <Books show={page === 'books'} books={result.data.allBooks} />

      <NewBook show={page === 'add'} setError={notify} />
    </div>
  )
}

export default App
