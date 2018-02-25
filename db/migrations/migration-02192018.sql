\c manganime_db;

DROP TABLE IF EXISTS series;

CREATE TABLE IF NOT EXISTS series (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT
);
