const questionsRouter = require("./questions");
const diseasesRouter = require("./diseases");
const usersRouter = require("./users");

function route(app) {
  app.use("/diseases", diseasesRouter);
  app.use("/questions", questionsRouter);
  app.use("/users", usersRouter);
}

module.exports = route;
