const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const Course = require("../models/Course");
const User = require("../models/User");
const Quiz = require("../models/Quiz");
const Purchase = require("../models/Purchase");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/test", (req, res) => {
  res.send("instructor test");
});

//make user as instructor
router.put("/getting-started/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, function (
    err,
    updatedCourse
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send("updated to instructor");
    }
  });
});

router.get("/manage-course/:id", (req, res) => {
  // const userId = req.body.userId
  Course.find({ userId: req.params.id }, function (err, allCourse) {
    if (err) {
      console.log(err);
    } else {
      res.json(allCourse);
    }
  });
});

router.get("/all-course/:id", (req, res) => {
  const id = req.params.id;
  Course.findById(id, function (err, allCourse) {
    if (err) {
      console.log(err);
    } else {
      res.json(allCourse);
    }
  });
});

router.post("/add-course", (req, res) => {
  console.log(req.body);
  const title = req.body.title; //changed
  const description = req.body.description; //changed
  const learning = req.body.learning;
  const targetStudent = req.body.targetStudent;
  const category = req.body.Category;
  const prerequisites = req.body.prerequisites;
  const feeStructure = req.body.feeStructure;
  const price = req.body.Price;
  // console.log(price)
  const sections = req.body.sections;
  // console.log(sections)
  const imageUrl = req.body.image;
  const videoUrl = req.body.video;
  const userId = req.body.currentUser.currentUserId;
  const username = req.body.currentUser.currentUsername;

  const date = new Date().toISOString().split("T")[0];

  const newCourse = {
    title: title,
    description: description,
    targetStudent: targetStudent,
    userId: userId,
    username: username,
    sections: sections,
    learning: learning,
    feeStructure: feeStructure,
    price: price,
    imageUrl: imageUrl,
    videoUrl: videoUrl,
    prerequisites: prerequisites,
    date: date,
    category: category,
  };

  Course.create(newCourse, function (err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      console.log("added course");
    }
  });
});

//update
router.put("/all-course/:id", (req, res) => {
  Course.findByIdAndUpdate(req.params.id, req.body, function (
    err,
    updatedCourse
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send("updated !");
    }
  });
});

//delete course
router.delete("/all-course/:id", (req, res) => {
  Course.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send("deleted course");
    }
  });
});

router.post("/add-quiz", (req, res) => {
  console.log(req.body);
  const instructorId = req.body.instructorId;
  const question = req.body.question;
  const options = req.body.options;
  const answer = req.body.answer;
  const date = new Date().toISOString().split("T")[0];

  const newQuiz = {
    instructorId: instructorId,
    question: question,
    options: options,
    answer: answer,
    date: date,
  };

  Quiz.create(newQuiz, function (err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      res.json(newlyCreated);
    }
  });
});

router.get("/earning/:id", (req, res) => {
  Purchase.find({ instructorId: req.params.id }, function (err, details) {
    if (err) {
      console.log(err);
    } else {
      res.json(details);
    }
  });
});

router.get("/earning/:id/course/:courseId", (req, res) => {
  Purchase.find(
    { instructorId: req.params.id, courseId: req.params.courseId },
    function (err, details) {
      if (err) {
        console.log(err);
      } else {
        res.json(details);
      }
    }
  );
});
module.exports = router;
