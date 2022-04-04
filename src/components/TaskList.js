import { useGlobalContext } from '../context'

const TaskList = () => {
  const { removeTask, setCurrentTask, setCompletedTask, filtered_tasks } =
    useGlobalContext()

  return (
    <div className='tasks-container'>
      {filtered_tasks.map((task) => {
        const { id, name, completed } = task
        return (
          <article key={id} className={completed ? 'task active' : 'task'}>
            <h3>{name}</h3>
            <div className='btn-container'>
              <button onClick={() => setCompletedTask(id, task)}>
                {completed ? 'undone' : 'done'}
              </button>
              <button onClick={() => setCurrentTask(task)}>edit</button>
              <button onClick={() => removeTask(id)}>remove</button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default TaskList
