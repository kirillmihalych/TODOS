import { useGlobalContext } from '../context'

const TaskList = () => {
  const { tasks } = useGlobalContext()
  return (
    <div>
      {tasks.map(({ id, name }) => {
        // const { id, name } = task
        return (
          <article key={id}>
            <h3>{name}</h3>
          </article>
        )
      })}
    </div>
  )
}

export default TaskList
