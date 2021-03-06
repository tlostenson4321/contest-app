
/**
 * Module dependencies.
 */
// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var videoController = require('./controllers/videoController')
// Routes \\
app.get('/', function(req, res){
  res.sendFile('index.html', {root : './public'})
});

app.post('/videosubmit', videoController.createPost)
app.get('/getPosts', videoController.createPost)

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})