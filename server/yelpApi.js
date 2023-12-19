import { fetcher } from 'itty-fetcher'

const { YELP_API_TOKEN } = process.env

// helper utility to strip extraneous info from listings (alternatively could use GraphQL)
const cleanListing = ({ name, url, review_count, rating, phone, display_phone, distance, location }) =>
  ({ name, url, review_count, rating, phone, display_phone, distance, location })

// create an itty-fetcher instance to simplify fetches
export const yelpApi = {
  search: query => fetcher({
    base: 'https://api.yelp.com/v3/businesses',
    headers: {
      'Authorization': `Bearer ${YELP_API_TOKEN}`,
    },
    handleResponse: async (response) => {
      const data = await response.json()
      const size = data.total
      const max_pages = Math.ceil(data.total / (query.limit ?? 20))
      const on_page = (query.offset ?? 0) / (query.limit ?? 20) + 1

      return !response.ok
        ? { error: data }
        : {
            data: {
              ...data,
              businesses: data.businesses.map(cleanListing),
              on_page,
              max_pages,
            }
          }
    }
  }).get('/search', query)
}
