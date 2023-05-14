const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const errorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(cookieParser());

// route imports
const office = require("./routes/officeRoute");
const user = require("./routes/userRoute");
const form = require("./routes/formRoute");

app.use("/api/v1", office);
app.use("/api/v1", user);
app.use("/api/v1", form);

//middleware for error
app.use(errorMiddleware);
module.exports = app;
