const { Router } = require("express");
const { sayHelloHandler } = require("../controller/greet");

const router = Router();

router.get("/", sayHelloHandler);

module.exports = router;
