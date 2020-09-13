const jwt = require('jsonwebtoken');

const payload = {
  id: 1234
};

const secret = 'long secret';

const token = jwt.sign(payload, secret, { expiresIn: '1m' });

console.log(token);
