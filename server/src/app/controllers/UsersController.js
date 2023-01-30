const Users = require("../models/Users");

class UsersController {
  show(req, res, next) {
    Users.find({})
      .then((ques) => {
        res.send(ques);
      })
      .catch(next);
  }

  post(req, res, next) {
    const data = { ...req.body };
    if (Object.keys(data).length !== 0) {
      const user = new Users({
        displayName: data.displayName,
        name: data.name,
        properties: data.properties,
        description: data.description,
        reason: data.reason,
        howtofix: data.howtofix,
        medicines: data.medicines,
      });
      user
        .save()
        .then(() => res.status(200))
        .catch((err) => console.error(err));
    }
  }
}

module.exports = new UsersController();
