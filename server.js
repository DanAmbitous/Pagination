const express = require('express')
const app = express()
const PORT = process.env.PORT || 6525

const users = [
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''}
]

let incremantion = 0; 
users.forEach(user => {
  incremantion++

  user.id += incremantion

  user.name += `User ${incremantion}`
})

const posts = [
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''},
  {id: 0, name: ''}
]

let incremantionPost = 0; 
posts.forEach(post => {
  incremantionPost++

  post.id += incremantionPost

  post.name += `Post ${incremantionPost}`
})

app.get('/posts', paginatedResults(posts), (req, res) => {
  
})

app.get('/users', (req, res) => {
  const page = Number(req.query.page)
  const limit = Number(req.query.limit)

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results = {}

  console.log(endIndex, users.length)

  if (endIndex < users.length) {
    results.next = {
      page: page - 1,
      limit: limit
    }
  } 

  if (startIndex > 0) {
    results.previous = {
      page: page + 1,
      limit: limit
    }
  }
    
  results.resultsArray = model.slice(startIndex, endIndex)

  res.json(results)
})

function paginatedResults(model) {
  return (req, res, next) => {
    
  }
}

app.listen(PORT, () => console.log(`Running server on port ${PORT}`))