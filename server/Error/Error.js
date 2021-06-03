const ErrorStatusMap = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Requested entity does not exist',
  408: 'Request Timeout',
  500: 'Internal Server Error'
};

class GeneralError extends Error {
  constructor(status, message = '') {
    super(message);
    this.status = status;
    this.message = { error: message || ErrorStatusMap[status] };
  }
}

module.exports = { GeneralError };
