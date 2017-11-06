import express from 'express'
import controller from './controllers/controller'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.post('/api/controller', controller.handlePost)

const port = 3000
app.listen(port, () => console.log(`Running on port ${port}`))
