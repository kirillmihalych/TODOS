const reducer = (state, action) => {
  //set tasks
  if (action.type === 'SET_TASKS') {
    return { ...state, filtered_tasks: [...state.tasks] }
  }
  // add functional
  if (action.type === 'SET_QUERY') {
    return { ...state, query: action.payload }
  }
  if (action.type === 'SET_TASK') {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: new Date().getTime(),
          name: action.payload,
          completed: false,
        },
      ],
    }
  }
  // delete functional
  if (action.type === 'REMOVE_TASK') {
    let tempId = action.payload
    let tempTasks = state.tasks.filter((task) => task.id !== tempId)
    return { ...state, tasks: tempTasks }
  }
  // update functional
  if (action.type === 'SET_CURRENT_TASK') {
    let tempTask = action.payload
    return { ...state, isEditing: true, currentTask: tempTask }
  }
  if (action.type === 'UPDATE_TASKS') {
    const { id, updatedTask } = action.payload
    let tempTasks = state.tasks.map((task) =>
      task.id === id ? updatedTask : task
    )
    return {
      ...state,
      tasks: tempTasks,
      isEditing: false,
    }
  }
  //filter functional
  if (action.type === 'SET_COMPLETED_TASK') {
    const { id, completedTask } = action.payload
    let tempTasks = state.tasks.map((task) =>
      task.id === id
        ? {
            ...completedTask,
            completed: completedTask.completed ? false : true,
          }
        : task
    )
    console.log(tempTasks)
    return { ...state, tasks: tempTasks }
  }
  if (action.type === 'CLEAR_TASKS') {
    return { ...state, tasks: [] }
  }
  if (action.type === 'UPDATE_FILTERS') {
    console.log(action.payload)
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }
  if (action.type === 'FILTER_TASKS') {
    let tempTasks = [...state.tasks]
    let currentFilter = state.filters.category

    if (currentFilter === 'completed') {
      tempTasks = tempTasks.filter((task) => task.completed === true)
    }
    if (currentFilter === 'active') {
      tempTasks = tempTasks.filter((task) => task.completed === false)
    }
    return { ...state, filtered_tasks: tempTasks }
  }
  throw Error(`there is no matching "${action.type}"`)
}

export default reducer
