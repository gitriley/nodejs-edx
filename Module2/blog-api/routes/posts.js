let store = require('./../store.js')

module.exports = {
  getPosts(req, res) {
  	res.status(200).send(store)
  },
  addPost(req, res) {
  	const id = store.posts.length
  
  	if (req.body && req.body !== null) {

  		store.posts.push({})

  		if (req.body.name && req.body.name !== null) {
  			store.posts[id].name = req.body.name
  			store.posts[id].id = id
  		} else {
  			store.posts[id].name = "Untitled " + id
  		}

  		if (req.body.url && req.body.url !== null) {
  			store.posts[id].url = req.body.url
  		} else {
  			store.posts[id].url = "no url"
  		}

  		if (req.body.text && req.body.text !== null) {
  			store.posts[id].text = req.body.text
  		} else {
  			store.posts[id].text = " "
  		}
  	}
  	
  	res.status(201).send({id: id})
  },

  updatePost(req, res) {
  	store.posts[req.params.id] = req.body
  	store.posts[req.params.id].id = req.params.id
  	res.status(200).send(store.posts[req.params.id])
  },

  removePost(req, res) {
  	store.posts[req.params.id] = null
  	res.status(204).send()
  }
}
















