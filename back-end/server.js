const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

let courses = []
let courseName = ""
let courseReviews = []

let reviews = []
let professorName = ""
let review = ""
let grade = ""
let recommend = ""
let dateTaken = ""
let hoursSpent = ""

app.post('/api/course', (req, res) => {
  let item = {
    courseName: req.body.courseName,
    courseReviews: req.body.review
  };
  courses.push(item);
  res.send(item);
});

app.post('/api/review', (req, res) => {
  let name = req.body.courseName;
  let rev = {
    courseName: name,
    professorName: req.body.professorName,
    grade: req.body.grade,
    review: req.body.review,
    recommend: req.body.recommend,
    dateTaken: req.body.dateTaken,
    hoursSpent: req.body.hoursSpent
  };
  reviews.push(rev);
  
  if(name in courses){
    let allReviews = courses[name].courseReviews
    allReviews.push(rev)
    courses[name] = allReviews;
  } else {
    courses[name] = [rev];
  }
  res.send(rev);
});

app.get('/api/course', (req, res) => {
  res.send(courses);
});

app.get('/api/review', (req, res) => {
  res.send(reviews);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));