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
  filtered_tasks: [],
  query: '',
  isEditing: false,
  currentTask: {},
  filters: {
    category: '',
  },
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  //set filtered tasks
  useEffect(() => {
    dispatch({ type: 'SET_TASKS' })
  }, [state.tasks])
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
  const updateTasks = (id, updatedTask) => {
    dispatch({ type: 'UPDATE_TASKS', payload: { id, updatedTask } })
  }
  //filters functional
  const setCompletedTask = (id, completedTask) => {
    dispatch({ type: 'SET_COMPLETED_TASK', payload: { id, completedTask } })
  }

  const clearTasks = () => {
    dispatch({ type: 'CLEAR_TASKS' })
  }

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.lastChild.data
    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } })
  }

  useEffect(() => {
    dispatch({ type: 'FILTER_TASKS' })
  }, [state.filters])

  return (
    <AppContext.Provider
      value={{
        ...state,
        setQuery,
        setTask,
        removeTask,
        setCurrentTask,
        updateTasks,
        setCompletedTask,
        clearTasks,
        updateFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
