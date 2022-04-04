import { useGlobalContext } from '../context'

const EditForm = () => {
  const { currentTask, setCurrentTask, updateTasks } = useGlobalContext()

  const handleEditSubmit = (e) => {
    e.preventDefault()
    updateTasks(currentTask.id, currentTask)
  }

  const handleEditChange = (e) => {
    setCurrentTask({ ...currentTask, name: e.target.value })
  }

  return (
    <form onSubmit={handleEditSubmit}>
      <h2>Edit a task!</h2>
      <div className='input-wrapper'>
        <input
          type='text'
          placeholder='change your task'
          value={currentTask.name}
          onChange={handleEditChange}
        />
        <button type='submit'>edit</button>
      </div>
    </form>
  )
}

export default EditForm
