const sayHelloHandler = (req, res) => {
  if (!req.query.name) throw new Error("Name is required");

  res.status(200).json({
    message: `Hello ${req.query.name}! Welcome to Younglabs.`,
  });
};

module.exports = { sayHelloHandler };
