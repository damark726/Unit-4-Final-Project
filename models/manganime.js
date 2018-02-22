const db = require('../db/config');

const Manganime = {};

Manganime.findAll = () => {
  return db.query(`SELECT * FROM series`);
};

module.exports = Manganime;
