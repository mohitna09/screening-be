const { Router } = require("express");
const greetRouteHandler = require("./greet");

const router = Router();
router.use("/greet", greetRouteHandler);

module.exports = router;
