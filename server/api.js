import apicache from 'apicache'
import express from 'express'
import { yelpApi } from './yelpApi.js'

export const api = express()
const cache = apicache.middleware

api.get('/search', cache('30 minutes'), async (req, res) => {
  const { error, data } = await yelpApi.search(req.query)

  if (error) {
    res.status(400).json(error)
  } else {
    res.json(data)
  }
})
