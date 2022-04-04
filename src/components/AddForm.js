import { useGlobalContext } from '../context'

const AddForm = () => {
  const { query, setQuery, setTask } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query !== '') {
      setTask(query)
    }
    setQuery('')
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a task!</h2>
      <div className='input-wrapper'>
        <input
          type='text'
          placeholder='enter your task'
          value={query}
          onChange={handleChange}
        />
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default AddForm
