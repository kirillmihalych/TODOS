const reducer = (state, action) => {
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
  if (action.type === 'REMOVE_TASK') {
    let tempId = action.payload
    let tempTasks = state.tasks.filter((task) => task.id !== tempId)
    return { ...state, tasks: tempTasks }
  }
  throw Error(`there is no matching "${action.type}"`)
}

export default reducer
