module.exports = (error, req, res, next) => {
  // console.log(error.name);
  // validation Error
  if (error.name === 'ValidationError') {
    if (process.env.NODE_ENV === 'production') {
      return res.status(400).json(error.message);
    } else {
      return res.status(400).json(error.errors);
    }
    // return res.status(400).json(error.message);
  }
  // other errors
  // error instanceof CustomError

  // winston
  console.error(error);
  return res.status(500).json('something unexpected happened, please contact');
};

// class CustomError extends Error {

// }
