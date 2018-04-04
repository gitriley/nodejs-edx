const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')

let app = express()

app.use(bodyParser.json())

app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:id', routes.posts.updatePost)
app.delete('/posts/:id', routes.posts.removePost)

app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)


// For testing purposes only, obviously...
app.get('/writefile', routes.testMethods.writeFile)

app.listen(3330)

