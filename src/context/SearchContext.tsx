import { api } from '@/lib/api'
import { createContext, useContext, useEffect, useState } from 'react'

const SearchContext = createContext({})

export type SearchParams = {
  location: string
  distance: number
  sort_by: 'distance' | 'rating'
  term: string
  page: number
}

export type BusinessType = {
  name: string
  rating: number
  review_count: number
  distance: number
}

export type SearchContextType = {
  searchParams: SearchParams
  results: BusinessType[]
  setLocation: (value: string) => void
  setSortBy: (value: string) => void
  next: () => void
  prev: () => void
}

export const SearchProvider = ({ children }) => {
  const defaultConfig: SearchParams = {
    term: 'boba',
    distance: 6000,
    location: '121 Albright Way, Los Gatos, CA 95032',
    sort_by: 'distance',
    page: 1,
    max_pages: 1,
  }

  const [results, setResults] = useState({}) // Replace with your state logic
  const [searchParams, setSearchParams] = useState(defaultConfig)

  // generic setter for search params
  const setParam = <T = string>(param: string) =>
    (value: T) =>
      setSearchParams(s => ({
        ...s,
        page: 1,
        [param]: value,
      }))

  // convenience controls for setting search params
  const setLocation = setParam('location')
  const setSortBy = setParam('sort_by')
  const next = () => setSearchParams(s => ({
    ...s,
    page: results.on_page + 1
  }))
  const prev = () => setSearchParams(s => ({
    ...s,
    page: results.on_page - 1
  }))

  // whenever the searchParams change, the search results automatically reload
  useEffect(() => {
    console.log('loading API with', searchParams)
    api
      .get(searchParams)
      .then((v: any) => setResults(v))
  }, [searchParams])

  // Value to be passed to the context
  const contextValue: SearchContextType = {
    results,
    on_page: results.on_page,
    max_pages: results.max_pages,
    setLocation,
    setSortBy,
    next,
    prev,
    searchParams,
  }

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  )
}

// export context as hook
export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error('useSearch() must be used within the SearchProvider')
  }

  return context
}
