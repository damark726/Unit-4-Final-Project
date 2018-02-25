const db = require("../db/config");

const Manganime = {};

Manganime.findAll = id => {
  return db.query(`
    SELECT *, series.id FROM series
    JOIN users ON series.user_id = users.id
    WHERE users.id = $1
    `, id)
};


Manganime.findById = id => {
  return db.oneOrNone(`SELECT * FROM series WHERE id = $1`,[id]);
};

Manganime.create = (series) => {
  console.log("created series");
  return db.one(
    `
      INSERT INTO series
      (title, url, episodes_watched, user_id)
      VALUES ($1, $2, $3, $4) RETURNING *
    `,
    [series.title, series.url, series.episodes_watched, series.user_id]
  );
};


Manganime.update = (series, id) => {
  console.log("update working");
  return db.oneOrNone(
  `
    UPDATE series SET
    title = $1,
    url = $2,
    episodes_watched = $3,
    user_id = $4
    WHERE id = $5
    RETURNING *
  `,
  [series.title, series.url, series.episodes_watched, series.user_id, id]
    );
};


Manganime.delete = id => {
  console.log("model delete running");
  return db.none(
    `
      DELETE FROM series
      WHERE id = $1
    `,
    [id]
  );
};



module.exports = Manganime;
