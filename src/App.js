import { AddForm, TaskList, EditForm } from './components'
import { useGlobalContext } from './context'

const App = () => {
  const { isEditing } = useGlobalContext()

  return (
    <main>
      <div>
        {!isEditing ? <AddForm /> : <EditForm />}
        <TaskList />
      </div>
    </main>
  )
}

export default App
