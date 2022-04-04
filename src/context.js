import React, { useEffect, useReducer, useContext } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const getFromLocalStorage = () => {
  let localTasks = localStorage.getItem('tasks')
  if (localTasks) {
    return JSON.parse(localTasks)
  } else {
    return []
  }
}

const initialState = {
  tasks: getFromLocalStorage(),
  query: '',
  isEditing: false,
  currentTask: {},
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  //add functional

  const setQuery = (query) => {
    dispatch({ type: 'SET_QUERY', payload: query })
  }

  const setTask = (task) => {
    dispatch({ type: 'SET_TASK', payload: task })
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  }, [state.tasks])

  //delete functional
  const removeTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id })
  }
  // update functional
  const setCurrentTask = (id) => {
    dispatch({ type: 'SET_CURRENT_TASK', payload: id })
  }
  const updateTasks = (id, updatedTask) => [
    dispatch({ type: 'UPDATE_TASKS', payload: { id, updatedTask } }),
  ]

  return (
    <AppContext.Provider
      value={{
        ...state,
        setQuery,
        setTask,
        removeTask,
        setCurrentTask,
        updateTasks,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
