const db = require('../db/config');
const Manganime = {};
//==================================================================================================================================
// Manganime.findAll = () => {
//   return db.query(`SELECT * FROM shows`);
// };

Manganime.findAll = (id) => {
  return db.query(`
    SELECT *, shows.id FROM shows
    JOIN users ON shows.user_id = users.id
    WHERE users.id = $1
    `, [id])
};
//==================================================================================================================================
Manganime.findById = id => {
  return db.oneOrNone(`SELECT * FROM shows WHERE id = $1`,[id]);
};
//==================================================================================================================================
Manganime.create = (manganime) => {
  console.log("created manganime");
  return db.one(`
      INSERT INTO shows
      (title, url, episodes_watched, user_id)
      VALUES ($1, $2, $3, $4) RETURNING *
    `,
    [manganime.title, manganime.url, manganime.episodes_watched, manganime.user_id]
  );
};
//==================================================================================================================================
Manganime.update = (manganime, id) => {
  return db.oneOrNone(`
    UPDATE shows SET
    episodes_watched = $1
    WHERE id = $2
    RETURNING *
  `,
  [manganime.episodes_watched, id]
    );
};
//==================================================================================================================================
Manganime.delete = id => {
  return db.none(`
      DELETE FROM shows
      WHERE id = $1
    `,[id]);
};
//==================================================================================================================================
module.exports = Manganime;
