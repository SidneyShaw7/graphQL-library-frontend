import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { EDIT_AUTHOR } from '../queries'
import Select from 'react-select'

const SetBirthyear = ({ authors }) => {
  const [name, setName] = useState('')
  const [setBornTo, setBorn] = useState('')

  const [changeBornDate] = useMutation(EDIT_AUTHOR)

  const options = authors.map((a) => ({ value: a.name, label: a.name }))
  console.log(options)

  const handleChange = (selectedOption) => {
    setName(selectedOption.value)
    console.log(`Option selected:`, selectedOption.value)
  }

  const submit = (e) => {
    e.preventDefault()

    changeBornDate({ variables: { name, setBornTo } })

    // setName('')
    setBorn('')
  }

  return (
    <div>
      <h2>Set birhtyear</h2>
      <form onSubmit={submit}>
        <Select options={options} onChange={handleChange} />
        {/* <div>
          name
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div> */}
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
