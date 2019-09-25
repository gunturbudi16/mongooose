const user = require("../models/user");

class Controller {
  static edit(req, res) {
    user

      .findOneAndUpdate(
        {
          _id: req.params.id
        },
        req.body,
        {
          new: true
        }
      )
      .then(data => {
        res.status(200).json(data);
        console.log(data);
      })

      .catch(function(err) {
        res.status(500).json({
          messege: err.message
        });
      });
  }
  static getedit(req, res) {
    user
      .find({
        _id: req.params.id
      })

      .then(function(data) {
        console.log(data);
        res.status(200).json(data);
      })
      .catch(function(err) {
        res.status(500).json({
          messege: "not fond"
        });
      });
  }
  static add(req, res) {
    console.log("Ini Database");
    var obj = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber
    };
    console.log(obj);
    user
      .create(obj)
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(500).json({
          messege: err.message
        });
      });
  }
  static all(req, res) {
    user
      .find({})
      .populate("address", "address -_id")
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(500).json({ messege: err.message });
      });
  }
  static remove(req, res) {
    user
      .findByIdAndDelete(req.params.id)
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(500).json({
          messege: err.message
        });
      });
  }
}

module.exports = Controller;
