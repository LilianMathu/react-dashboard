import app from "./api/app";
import config from "./config";

const port = config.port;

app.listen(port, () => {
  console.log(`App is up and running on port ${port}!`);
});
