const Question = require("../models/Question");

class QuestionController {
  show(req, res, next) {
    Question.find({})
      .then((ques) => {
        res.send(ques);
      })
      .catch(next);
  }

  getOne(req, res, next) {
    Question.findOne({ _id: req.params.id })
      .then((ques) => {
        res.send(ques);
        const answer = ques.answer;
        for (let i in answer) {
          console.log(i, answer[i]);
        }
      })
      .catch(next);
  }
}

module.exports = new QuestionController();
