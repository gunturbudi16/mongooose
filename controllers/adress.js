const Address = require("../models/adress");
const User = require("../models/user");
module.exports = {
  addresss: async (req, res) => {
    const address = await Address.create({
      address: req.body.address
    });
    const user = await User.findOneAndUpdate(
      {
        _id: req.body._id
      },
      { $push: { address: address._id } },
      { new: true }
    );
    res.status(200).send({
      message: "Created new Address Success",
      address,
      user
    });
  }
};
