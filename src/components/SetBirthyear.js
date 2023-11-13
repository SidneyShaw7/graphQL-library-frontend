import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { EDIT_AUTHOR } from '../queries'

const SetBirthyear = () => {
  const [name, setName] = useState('')
  const [setBornTo, setBorn] = useState('')

  const [changeBornDate] = useMutation(EDIT_AUTHOR)

  const submit = (e) => {
    e.preventDefault()

    changeBornDate({ variables: { name, setBornTo } })

    setName('')
    setBorn('')
  }

  return (
    <div>
      <h2>Set birhtyear</h2>
      <form onSubmit={submit}>
        <div>
          name
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          born
          <input
            value={setBornTo}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>
        <button type='submit'>update author</button>
      </form>
    </div>
  )
}

export default SetBirthyear
