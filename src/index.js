import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello from server: home route')
})
app.listen(3000, () => {
  'app is listening at port 3000'
})
