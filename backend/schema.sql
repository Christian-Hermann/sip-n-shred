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

CREATE TABLE apres_spots (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  resort_id INTEGER NOT NULL REFERENCES resorts(id),
  base_area VARCHAR(100),
  distance_from_base DECIMAL(4,1),
  price_range VARCHAR(10),
  vibe VARCHAR(100),
  rating INTEGER
);