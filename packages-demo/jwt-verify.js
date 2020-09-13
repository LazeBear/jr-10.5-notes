const jwt = require('jsonwebtoken');

const secret = 'long secret';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaWF0IjoxNTk5OTg4Mzg2LCJleHAiOjE1OTk5ODg0NDZ9.XBMGJIB-Y8dfxYNkS_xjF6lpHq1AJ3ti-b9n3OhVE3k';
try {
  const decoded = jwt.verify(token, secret);
  req.user = decoded;
  console.log(decoded);
} catch (e) {}
