\c manganime_db;

DROP TABLE IF EXISTS shows;

CREATE TABLE IF NOT EXISTS shows (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  episodes_watched INTEGER NOT NULL,
  user_id INTEGER REFERENCES users(id)
);
