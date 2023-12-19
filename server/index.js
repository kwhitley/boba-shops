import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { api } from './api.js'

// joys of ESM/CJS in Node... still in 2023 :D
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT ?? 3001
const app = express()

// serve static files from vite build
app.use(express.static(path.join(__dirname, '../dist')))

// register any api endpoints
app.use('/api', api)

// start our server
app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
})
