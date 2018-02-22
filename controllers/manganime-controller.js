// const axios = require('axios');
const Manganime = require('../models/manganime');
const manganimeController = {};

manganimeController.index = (req, res) => {
  Manganime.findAll()
    .then(manganime => {
      res.json({
        message: 'ok',
        data: manganime,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = manganimeController;
