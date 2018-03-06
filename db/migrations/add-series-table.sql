DROP TABLE IF EXISTS series;

CREATE TABLE IF NOT EXISTS series (
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  series_type TEXT,
  url TEXT,
  episodes_watched SMALLINT,
  chapters_read SMALLINT,
  status TEXT,
  rating SMALLINT CHECK(rating BETWEEN 1 AND 10),
  user_id INTEGER REFERENCES users(id)
);
