\c manganime_db

DROP TABLE IF EXISTS series;

CREATE TABLE IF NOT EXISTS series (
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  url TEXT,
  episodes_watched INTEGER,
  user_id INTEGER REFERENCES users(id)
);
