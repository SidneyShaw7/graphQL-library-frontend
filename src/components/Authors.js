import SetBirthyear from './SetBirthyear'
import Select from 'react-select'

const Authors = ({ show, authors }) => {
  if (!show) {
    return null
  }
  // const authors = []

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SetBirthyear authors={authors} />
    </div>
  )
}

export default Authors
