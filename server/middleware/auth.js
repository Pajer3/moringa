const jwt = require('jsonwebtoken');

// Token verification middleware
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    console.error('No token provided');
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Unauthorized: Invalid token');
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    req.userId = decoded.id;
    next();
  });
};


module.exports = verifyToken;
