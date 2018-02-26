const db = require("../db/config");
const Manganime = {};
//========================================================================================================================================
Manganime.findAll = id => {
  return db.query(`
    SELECT *, series.id FROM series
    JOIN users ON series.user_id = users.id
    WHERE users.id = $1
    `, id)
};
//========================================================================================================================================
Manganime.findById = id => {
  return db.oneOrNone(`SELECT * FROM series WHERE id = $1`,[id]);
};
//========================================================================================================================================
Manganime.create = (series) => {
  return db.one(
    `
      INSERT INTO series
      (title, series_type, url, episodes_watched, chapters_read, status, rating, user_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *
    `,
    [series.title, series.series_type, series.url, series.episodes_watched, series.chapters_read, series.status, series.rating, series.user_id]
  );
};
//========================================================================================================================================
Manganime.update = (series, id) => {
  return db.oneOrNone(
  `
    UPDATE series SET
    episodes_watched = $1,
    chapters_read = $2,
    status = $3,
    rating = $4,
    user_id = $5
    WHERE id = $6
    RETURNING *
  `,
  [series.episodes_watched, series.chapters_read, series.status, series.rating, series.user_id, id]
    );
};
//========================================================================================================================================
Manganime.delete = id => {
  return db.none(
    `
      DELETE FROM series
      WHERE id = $1
    `,
    [id]
  );
};
//========================================================================================================================================
module.exports = Manganime;
