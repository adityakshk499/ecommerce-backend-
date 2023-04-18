//not found

const notFound = (req, res, next) => {
  const err = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(err);
};

// Error Handler

const errorHandler = (err, req, res, next) => {
    console.log(res)

  const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statuscode);
  res.json({
    message: err?.message,
    status: err?.stack,
  });
};

module.exports = {
  errorHandler,
  notFound,
};
