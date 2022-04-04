import { AddForm, TaskList, EditForm, Filters } from './components'
import { useGlobalContext } from './context'

const App = () => {
  const { isEditing } = useGlobalContext()

  return (
    <main>
      <div>
        {!isEditing ? <AddForm /> : <EditForm />}
        <TaskList />
        <Filters />
      </div>
    </main>
  )
}

export default App
