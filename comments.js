// Create web server
// 1. Load modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

// 2. Use middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// 3. Define routes
// Read comments from file
app.get('/comments', function(req, res) {
  fs.readFile('comments.json', function(err, data) {
    if (err) {
      console.log(err);
      res.send('[]');
    } else {
      res.send(data);
    }
  });
});

// Write comments to file
app.post('/comments', function(req, res) {
  fs.readFile('comments.json', function(err, data) {
    if (err) {
      console.log(err);
      res.send('[]');
    } else {
      var comments = JSON.parse(data);
      comments.push(req.body);
      fs.writeFile('comments.json', JSON.stringify(comments, null, 2), function(err) {
        if (err) {
          console.log(err);
          res.send('[]');
        } else {
          res.send(comments);
        }
      });
    }
  });
});

// 4. Start web server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});
