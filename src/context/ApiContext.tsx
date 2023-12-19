import { api } from '@/lib/api'
import { createContext, useContext, useState } from 'react'

const ApiContext = createContext({})

export const ApiProvider = ({ children }) => {
  const [results, setResults] = useState({}) // Replace with your state logic

  // Value to be passed to the context
  const contextValue = {
    results,
    search: (query) => api.get(query).then(setResults),
  }

  return (
    <ApiContext.Provider value={contextValue}>
      {children}
    </ApiContext.Provider>
  )
}

// export context as hook
export const useApi = () => {
  const context = useContext(ApiContext)

  if (!context) {
    throw new Error('useApi() must be used within the ApiProvider')
  }

  return context
}
