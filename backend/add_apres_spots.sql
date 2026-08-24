CREATE TABLE apres_spots (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  resort_id INTEGER NOT NULL REFERENCES resorts(id),
  price_range VARCHAR(10),
  vibe VARCHAR(100),
  distance_from_resort DECIMAL(4,1),
  rating INTEGER
);