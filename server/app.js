import express from 'express'

const app = express()

app.get('*', (req, res) => {
  res.send('hello from the other side!')
})

const port = 3000
app.listen(port, () => console.log(`Running on port ${port}`))
