const express = require("express");
const route = require("./routes");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const { configDotenv } = require("dotenv");

configDotenv();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  "/api",
  cors({
    origin: process.env.FRONTEND_DOMAIN,
    optionsSuccessStatus: 200,
  }),
  route
);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Application started on port ${PORT}`));
