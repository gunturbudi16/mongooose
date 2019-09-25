const mongoose = require(`mongoose`);
const { MONGOOSE_DB, MONGOOSE_CONNECTION } = require("./variableEnv");

const CONNECTION =
  process.env.MONGOOSE_CONNECTION || `mongodb://localhost/${MONGOOSE_DB}`;
mongoose.connect(MONGOOSE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const db = mongoose.connection;
module.exports = db;
