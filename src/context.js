import React, { useEffect, useReducer, useContext } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  tasks: [],
  query: '',
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setQuery = (query) => {
    dispatch({ type: 'SET_QUERY', payload: query })
  }

  const setTask = (task) => {
    dispatch({ type: 'SET_TASK', payload: task })
  }

  return (
    <AppContext.Provider value={{ ...state, setQuery, setTask }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
