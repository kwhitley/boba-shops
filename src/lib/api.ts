import { fetcher } from 'itty-fetcher'
import { ResultsType } from '@/context/SearchContext'

export type ApiQuery = {
  location?: string
  radius?: number
  term?: string
  sort_by?: 'rating' | 'distance'
}

export const api = {
  get: (query: ApiQuery): Promise<ResultsType> => fetcher().get('/api/search', query)
}
