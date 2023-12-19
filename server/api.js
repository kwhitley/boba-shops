import apicache from 'apicache'
import express from 'express'
import { yelpApi } from './yelpApi.js'

export const api = express()
const cache = apicache.middleware

api.get('/search', cache('30 minutes'), async (req, res) => {
  const { query } = req
  const { limit = 20, page = 1 } = query
  const { error, data } = await yelpApi.search({
    ...query,
    offset: (page - 1) * limit,
  })

  if (error) {
    res.status(400).json(error)
  } else {
    res.json(data)
  }
})
