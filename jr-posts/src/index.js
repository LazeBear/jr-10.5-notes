require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   next();
// });

// /
app.use(morgan('common'));
app.use('/v1', routes);
// app.use('/v2', routes2);

// ERROR handing
// app.use((err, req, res, next) => {
//   // log
//   return res.status(499).send('Unable to handle the request');
// });

// WARNING, DETECTS, DEVELOPMENT, INFO.....
// DEV -> show all
// PROD -> SHOW WARNING

// 记录到本地文件，或者数据库
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
