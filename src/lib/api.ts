import { fetcher } from 'itty-fetcher'

export type ApiQuery = {
  location?: string
  radius?: number
  term?: string
  sort_by?: 'rating' | 'distance'
}

export const api = {
  get: (query: ApiQuery) => fetcher().get('/api/search', query)
}
