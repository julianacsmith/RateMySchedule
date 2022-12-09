const express = require('express');
const bodyParser = require('body-parser');
const crypto = require("node:crypto");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server listening on port 3000!'));

let comments = [];
let name = "";
let comment = "";

let locations = [];
let placeName = "";
let reason = "";

app.post('/api/comments', (req, res) => {
  const id = crypto.randomUUID();
  let com = {
    name: req.body.name,
    comment: req.body.comment,
  };
  comments.push(com);
  res.send(com);
});

app.get('/api/comments', (req, res) => {
  res.send(comments);
});

app.delete('/api/comment/:name', (req, res) => {
  let name = req.params.name;
  let commentsMap = comments.map(item => {
    return item.name;
  });
  let index = commentsMap.indexOf(name);
  if (index === -1) {
    res.status(404)
      .send("Sorry, that item doesn't exist");
    return;
  }
  let com = comments[index];
  comments.splice(index,1);
  res.send(com);
});

app.get('/api/locations', (req, res) => {
  res.send(locations);
});

app.post('/api/locations', (req, res) => {
  let place = {
    placeName: req.body.placeName,
    reason: req.body.reason,
  };
  locations.push(place);
  res.send(place);
  }
);
