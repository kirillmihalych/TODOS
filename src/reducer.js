const reducer = (state, action) => {
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
  return { ...state }
  throw Error(`there is no matching "${action.type}"`)
}

export default reducer
