"use strict";

const Router = require("koa-router");
const router = new Router();
require("./user")(router);
module.exports = router;
