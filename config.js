import env from "dotenv";

env.config();

export default {
  port: process.env.PORT,
  mongo_uri: process.env.MONGO_URI,
};
