INSERT INTO resorts (
  name,
  new_snow,
  difficulty,
  best_for,
  drive_from_airport,
  has_terrain_park,
  apres_rating
)
VALUES
(
  'Park City',
  8,
  'Intermediate',
  'Families',
  45,
  TRUE,
  9
),
(
  'Deer Valley',
  8,
  'Intermediate',
  'Luxury',
  45,
  FALSE,
  8
),
(
  'Snowbird',
  14,
  'Expert',
  'Advanced Riders',
  35,
  TRUE,
  8
),
(
  'Powder Mountain',
  12,
  'Intermediate',
  'Powder',
  70,
  FALSE,
  7
),
(
  'Sundance',
  6,
  'Beginner',
  'Scenery',
  60,
  FALSE,
  7
);

INSERT INTO apres_spots (
  name,
  resort_id,
  base_area,
  distance_from_base,
  price_range,
  vibe,
  rating
)
VALUES
(
  'No Name Saloon',
  1,
  'Town Lift / Main Street',
  0.2,
  '$$',
  'Lively, casual, classic Park City apres',
  9
),
(
  'High West Saloon',
  1,
  'Town Lift / Main Street',
  0.3,
  '$$$',
  'Whiskey-focused, relaxed, upscale western vibe',
  9
),
(
  'Pig Pen Saloon',
  1,
  'Park City Mountain Village',
  0.0,
  '$',
  'Casual, lively, slopeside ski-bar vibe',
  8
),
(
  'Troll Hallen',
  2,
  'Silver Lake',
  0.0,
  '$$$',
  'Upscale, relaxed, classic Deer Valley apres',
  9
),
(
  'The Sticky Wicket',
  2,
  'Silver Lake',
  0.0,
  '$$',
  'Vintage ski bar, lively, casual apres atmosphere',
  8
),
(
  'Edgar''s Apres',
  2,
  'Snow Park',
  0.0,
  '$$',
  'Casual, lively, slopeside apres with food and drinks',
  8
);