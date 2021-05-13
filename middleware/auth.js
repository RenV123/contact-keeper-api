const jwt = require('jsonwebtoken');

module.exports = function (request, response, next) {
  //Get token from header
  const token = request.header('x-auth-token');

  //check if not token
  if (!token) {
    return response
      .status(401)
      .json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    response.status(401).json({ message: 'Token is not valid' });
  }
};
