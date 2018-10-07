const mongoose = require("mongoose");
const TokenGenerator = require("uuid-token-generator");
const tokgen = new TokenGenerator(256, TokenGenerator.BASE58);
const UserModel = mongoose.model("user");

module.exports = {
  sign_up: (req, res) => {
    if (req.body.verification_code == null) {
      res.status(400).send({ error: "verf_tok can't be empty" });
      return;
    }
    // generate a token
    const token = tokgen.generate();
    //find the user and update it
    UserModel.updateOne(
      //condition, query based on verification_code
      { verification_code: req.body.verification_code },
      // update the user info
      {
        token,
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        is_registered: true,
        img_b64: req.body.img_b64,
        verification_code: null
      },
      (err, rawuser) => {
        if (err) {
          console.error(err);
          res.status(500).send({ error: err });
        } else if (rawuser.nModified > 0) {
          res.status(200).send({ token });
        } else {
          res.status(400).send({
            error: `cant find the user with ${
              req.body.verification_code
            } as verf_code`
          });
        }
      }
    );
  },
  sign_in: (req, res) => {
    //todo: code for login
  }
};
