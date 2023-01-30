const Diseases = require("../models/Diseases");
const user = require("./user.json");
const indexDefault = require("./indexDefault.json");

let result = [];

class DiseasesController {
  show(req, res, next) {
    Diseases.find({})
      .then((diseases) => {
        res.send(diseases);
      })
      .catch(next);
  }
}

module.exports = new DiseasesController();
