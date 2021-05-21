"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //app.disable("x-powered-by")
//app.use(cors())
//app.use(json())
//app.use(urlencoded({ extended: true }))
//app.use(morgan("dev"))

exports.app = app;
app.get("/", function (req, res) {
  res.send({
    message: "hey there"
  });
});
app.post("/", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

var start = function start() {
  app.listen(3003, function () {
    console.log("listening on port 3003!");
  });
};

exports.start = start;