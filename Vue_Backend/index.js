const { response, request } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

app.use((request, response, next) => {
  console.log(request.method)
  console.log(request.path)
  console.log(request.body)
  console.log('------')
  next()
})

let plannings = [
  {
    id: 1,
    content: 'Visita a Binimela petita y snorkel',
    date: '25 de julio de 2021',
    important: true
  },
  {
    id: 2,
    content: 'Visita a Mercat Es Mercadal',
    date: '25 de julio de 2021',
    important: true
  },
  {
    id: 3,
    content: "Cena a Ca l'Olga",
    date: '25 de julio de 2021',
    important: false
  }
]

/* const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json'})
    response.end(JSON.stringify(planning))
}) */

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/plannings', (request, response) => {
  response.json(plannings)
})

app.get('/api/plannings/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log({ id })
  const planning = plannings.find(planning => planning.id === id)

  if (planning) {
    response.json(planning)
  } else {
    response.status(404).end()
  }
  console.log({ planning })
  response.json(planning)
})

app.delete('/api/plannings/:id', (request, response) => {
  const id = Number(request.params.id)
  plannings = plannings.filter(planning => planning.id !== id)
  response.status(204).end()
})

app.post('/api/plannings', (request, response) => {
  const planning = request.body

  if (!planning || !planning.content) {
    return response.status(400).json({ error: 'planning.content is missing' })
  }

  const ids = plannings.map(planning => planning.id)
  const maxId = Math.max(...ids)

  const newPlanning = {
    id: maxId + 1,
    content: planning.content,
    important: typeof planning.important !== 'undefined' ? planning.important : false,
    date: new Date().toISOString()
  }

  plannings = plannings.concat(newPlanning)

  response.status(201).json(newPlanning)
})

app.use((request, response) => {
  response.status(404).json({
    error: 'Not found'
  })
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
