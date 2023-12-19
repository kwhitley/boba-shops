import { api } from '@/lib/api'
import React, { createContext, useContext, useEffect, useState } from 'react'

const SearchContext = createContext({})

export type SearchParams = {
  location: string
  radius: number
  sort_by: 'distance' | 'rating'
  term: string
  page: number
}

export type BusinessType = {
  name: string
  rating: number
  review_count: number
  distance: number
  location: {
    address1: string
    display_address: string[]
  }
}

export type ResultsType = {
  businesses: BusinessType[]
  on_page: number
  max_pages: number
}

export type SearchContextType = {
  searchParams: SearchParams
  results: ResultsType,
  setLocation: (value: string) => void
  setSortBy: (value: string) => void
  on_page: number
  max_pages: number
  next: () => void
  prev: () => void
}

interface ProviderProps {
  children: React.ReactNode;
}

export const SearchProvider = ({ children }: ProviderProps) => {
  const defaultConfig: SearchParams = {
    term: 'boba',
    radius: 6000,
    location: '121 Albright Way, Los Gatos, CA 95032',
    sort_by: 'distance',
    page: 1,
  }

  const [results, setResults] = useState({
    businesses: [],
    on_page: 1,
    max_pages: 1,
  })
  const [searchParams, setSearchParams] = useState(defaultConfig)

  // generic setter for search params
  const setParam = (param: string) =>
    (value: any) =>
      setSearchParams((s: SearchParams) => ({
        ...s,
        page: 1, // on search criteria change, reset the page to 1
        [param]: value,
      }))

  // convenience controls for setting search params
  const setLocation = setParam('location')
  const setSortBy = setParam('sort_by')

  // these controls
  const next = () => setSearchParams((s: SearchParams) => ({
    ...s,
    page: results.on_page + 1
  }))
  const prev = () => setSearchParams((s: SearchParams) => ({
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
export const useSearch = () => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error('useSearch() must be used within the SearchProvider')
  }

  return context
}
