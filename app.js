import express from "express";
import createHttpError from "http-errors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// let indexRouter = require("./routes/index");
// let usersRouter = require("./routes/users");
// let sendData = require("./routes/sendData");

let app = express();
const port = process.env.PORT || "3000";

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded());
app.use(router);
app.set("trust proxy", true);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createHttpError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
