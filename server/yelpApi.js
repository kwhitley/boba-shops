import { fetcher } from 'itty-fetcher'

const { YELP_API_TOKEN } = process.env

// helper utility to strip extraneous info from listings (alternatively could use GraphQL)
const cleanListing = ({ name, url, review_count, rating, phone, display_phone, distance }) =>
  ({ name, url, review_count, rating, phone, display_phone, distance })

// create an itty-fetcher instance to simplify fetches
export const yelpApi = {
  search: query => fetcher({
    base: 'https://api.yelp.com/v3/businesses',
    headers: {
      'Authorization': `Bearer ${YELP_API_TOKEN}`,
    },
    handleResponse: async (response) => {
      const data = await response.json()

      return !response.ok
        ? { error: data }
        : {
            data: {
              ...data,
              businesses: data.businesses.map(cleanListing)
            }
          }
    }
  }).get('/search', query)
}
