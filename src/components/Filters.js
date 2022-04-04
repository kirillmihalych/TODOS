import { useGlobalContext } from '../context'

const Filters = () => {
  const { tasks, clearTasks, updateFilters } = useGlobalContext()

  return (
    <section className='filters-container'>
      <div className='filters-title'>
        <h4>
          {tasks.length === 1
            ? `${tasks.length} task left`
            : tasks.length === 0
            ? `all done`
            : `${tasks.length} tasks left`}
        </h4>
      </div>
      <div className='filters-btns-container'>
        <button name='category' onClick={updateFilters}>
          all
        </button>
        <button name='category' onClick={updateFilters}>
          active
        </button>
        <button name='category' onClick={updateFilters}>
          completed
        </button>
      </div>
      <div className='clear-btn'>
        <button onClick={clearTasks}>clear all tasks</button>
      </div>
    </section>
  )
}

export default Filters
