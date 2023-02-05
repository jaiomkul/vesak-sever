const app = require("./index");

const connect = require("./configs/db");

const port = process.env.PORT;

app.listen(port, async () => {
  try {
    await connect();
    console.log(connect());
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port", port);
});
