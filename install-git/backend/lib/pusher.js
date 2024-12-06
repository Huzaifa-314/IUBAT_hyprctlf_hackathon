const Pusher = require("pusher");
const dotenv = require("dotenv");

dotenv.config();

const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: process.env.CLUSTER,
  useTLS: true,
});

module.exports = pusher;
