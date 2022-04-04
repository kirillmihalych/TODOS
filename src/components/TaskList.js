import { useGlobalContext } from '../context'

const TaskList = () => {
  const { tasks, removeTask } = useGlobalContext()
  return (
    <div>
      {tasks.map(({ id, name }) => {
        // const { id, name } = task
        return (
          <article key={id}>
            <h3>{name}</h3>
            <button onClick={() => removeTask(id)}>remove</button>
          </article>
        )
      })}
    </div>
  )
}

export default TaskList
