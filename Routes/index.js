const Router = require("express").Router();

const AuthRouteHandlers = require("./Authentication");
Router.route("/signin").post(AuthRouteHandlers.sign_in);
Router.route("/signup").post(AuthRouteHandlers.sign_up);

module.exports = Router;
