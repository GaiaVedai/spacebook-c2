var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


const SERVER_PORT = 8050;

mongoose.connect('mongodb://localhost/spacebookDB', function() {
  console.log("DB connection established!!!");
})

var Post = require('./models/postModel');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 1) to handle getting all posts and their comments
app.get('/posts', (req, res)=> {
  Post.find({}).populate('comments').exec(function(err, result){
    res.send(result)
    console.log(result);
    })
});

  
// You will need to create 5 server routes
// These will define your API:

// 2) to handle adding a post
app.post('/posts', (req, res)=> {
  let bodyData = req.body;
  res.send(bodyData)
});
// 3) to handle deleting a post
app.delete('/posts/:id', (req, res)=> {
  let postId = req.params.id;
  res.send(postId)
});
// 4) to handle adding a comment to a post
app.post('/comments', (req, res)=> {
  let bodyData = req.body;
  res.send(bodyData)
});
// 5) to handle deleting a comment from a post
app.delete('/comments/:id', (req, res)=> {
  let commentId = req.params.id;
  res.send(commentId)
});

// const Post1 = new Post({text: "bla", comments: []})
// savePost = function(post){
  
//   post.save(function(err, data) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.error(data);
//     }
//   });
// }
// savePost(Post1)
// Post1.comments.push({text: "bli", user: "me"})



app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});
