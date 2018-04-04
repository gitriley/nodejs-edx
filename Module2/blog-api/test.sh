curl -H "Content-Type: application/json" -X POST -d '{"name": "Post 1", "url": "www.something.com/post1", "text": "New post #1. This is a great new post"}'  "http://localhost:3330/posts"
curl -H "Content-Type: application/json" -X POST -d '{"name": "Post 2", "url": "www.something.com/post2", "text": "New post #2. This is a great new post"}'  "http://localhost:3330/posts"
curl -H "Content-Type: application/json" -X POST -d '{"name": "Post 3", "url": "www.something.com/post3", "text": "New post #3. This is a great new post"}'  "http://localhost:3330/posts"
curl -H "Content-Type: application/json" -X POST -d '{"name": "Post 4", "url": "www.something.com/post4", "text": "New post #4. This is a great new post"}'  "http://localhost:3330/posts"
curl -H "Content-Type: application/json" -X POST -d '{"name": "Post 5", "url": "www.something.com/post5", "text": "New post #5. This is a great new post"}'  "http://localhost:3330/posts"
curl -H "Content-Type: application/json" -X POST -d '{"name": "Post 6", "url": "www.something.com/post6", "text": "New post #6. This is a great new post"}'  "http://localhost:3330/posts"
curl -H "Content-Type: application/json" -X POST -d '{"name": "Post 7", "url": "www.something.com/post7", "text": "New post #7. This is a great new post"}'  "http://localhost:3330/posts"
curl -H "Content-Type: application/json" -X POST -d '{"name": "Post 8", "url": "www.something.com/post8", "text": "New post #8. This is a great new post"}'  "http://localhost:3330/posts"
curl -H "Content-Type: application/json" -X POST -d '{"name": "Post 9", "url": "www.something.com/post9", "text": "New post #9. This is a great new post"}'  "http://localhost:3330/posts"
curl -H "Content-Type: application/json" -X POST -d '{"name": "Post 10", "url": "www.something.com/post10", "text": "New post #10. This is a great new post"}'  "http://localhost:3330/posts"


curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Updated Post 3", "url":"www.something.com/post3", "text": "Updating this post, which is post #3"}' "http://localhost:3330/posts/3"
curl -X DELETE "http://localhost:3330/posts/2" 
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Updated Post 7", "url":"www.something.com/post7", "text": "Updating this post, which is post #7"}' "http://localhost:3330/posts/7"
curl -X DELETE "http://localhost:3330/posts/4" 
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Updated Post 9", "url":"www.something.com/post9", "text": "Updating this post, which is post #9"}' "http://localhost:3330/posts/9"


curl -H "Content-Type: application/json" -X POST -d '{"text": "Wow this blog is GREAT!"}'  "http://localhost:3330/posts/3/comments"
curl -H "Content-Type: application/json" -X POST -d '{"text": "Wow this blog is TERRIBLE!"}'  "http://localhost:3330/posts/3/comments"
curl -H "Content-Type: application/json" -X POST -d '{"text": "Wow this blog is OK!"}'  "http://localhost:3330/posts/3/comments"

curl -H "Content-Type: application/json" -X POST -d '{"text": "Wow this blog is GREAT!"}'  "http://localhost:3330/posts/6/comments"
curl -H "Content-Type: application/json" -X POST -d '{"text": "Wow this blog is TERRIBLE!"}'  "http://localhost:3330/posts/6/comments"

curl -H "Content-Type: application/json" -X POST -d '{"text": "Wow this blog is GREAT!"}'  "http://localhost:3330/posts/7/comments"
curl -H "Content-Type: application/json" -X POST -d '{"text": "Wow this blog is TERRIBLE!"}'  "http://localhost:3330/posts/7/comments"
curl -H "Content-Type: application/json" -X POST -d '{"text": "Wow this blog is OK!"}'  "http://localhost:3330/posts/7/comments"

curl -H "Content-Type: application/json" -X PUT -d '{"text": "Revising my opinion..."}'  "http://localhost:3330/posts/3/comments/1"

curl -X DELETE "http://localhost:3330/posts/7/comments/0"

curl "http://localhost:3330/writefile" 
