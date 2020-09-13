const bcrypt = require('bcrypt');

const password = '12345';

const salt = '$2b$10$6o5G32Ei9JD3O3mJFRoTc.';

const hashed = bcrypt.hashSync(password, salt);
console.log(hashed);
