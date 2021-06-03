const { GeneralError } = require('./Error');

const sendError = (err, req, res, next) => {
  if (err) {
    if (err instanceof GeneralError) {
      res.status(err.status).send(err.message);
    } else {
      res.status(500).send({ error: 'Internal server error' });
    }
  }
};

module.exports = { sendError };
