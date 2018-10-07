const AuthRouteHandlers = require("./Authentication");
const Router = require("express").Router();

Router.route("/signin").post(AuthRouteHandlers.sign_in);
Router.route("/signup").post(AuthRouteHandlers.sign_up);

module.exports = Router;
