import { useGlobalContext } from '../context'

const TaskList = () => {
  const { tasks, removeTask, setCurrentTask } = useGlobalContext()
  return (
    <div>
      {tasks.map((task) => {
        const { id, name } = task
        return (
          <article key={id}>
            <h3>{name}</h3>
            <button onClick={() => removeTask(id)}>remove</button>
            <button onClick={() => setCurrentTask(task)}>edit</button>
          </article>
        )
      })}
    </div>
  )
}

export default TaskList
