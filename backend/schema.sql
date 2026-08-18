CREATE TABLE resorts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  new_snow INTEGER,
  difficulty VARCHAR(50),
  best_for VARCHAR(100),
  drive_from_airport INTEGER,
  has_terrain_park BOOLEAN,
  apres_rating INTEGER
);