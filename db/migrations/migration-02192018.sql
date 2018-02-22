\c manganime_db;

CREATE TABLE IF NOT EXISTS series (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT
);
