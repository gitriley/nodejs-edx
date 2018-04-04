let store = require('./../store.js')

module.exports = {
  getComments(req, res) {
    const postId = req.params.postId
    const post = store.posts[postId]
    if (post.comments) {
    	res.status(200).send(post.comments)
    } else {
    	res.status(200).send({msg: "no comments"})
    }
  }, 
  addComment(req, res) {
    const post = store.posts[req.params.postId]
    const comment = req.body

    if (!post.comments) {
    	post.comments = []
    }
    post.comments.push(req.body)

    res.status(201).send({msg: "comment posted"})
  },
  updateComment(req, res) {
    const post = store.posts[req.params.postId]
    const commentId = req.params.commentId
    post.comments[commentId] = req.body

    res.status(200).send(post.comments[commentId])
  },
  removeComment(req, res) {
    const post = store.posts[req.params.postId]
    const commentId = req.params.commentId
    post.comments[commentId] = null

    res.status(204).send()
  }  
}