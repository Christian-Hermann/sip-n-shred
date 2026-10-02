INSERT INTO resorts (
  name,  
  latitude,
  longitude,
  difficulty,
  best_for,
  drive_from_airport,
  has_terrain_park,
  apres_rating
)
VALUES
(
  'Park City',
  40.65,
  -111.51,
  'Intermediate',
  'Families',
  45,
  TRUE,
  9
),
(
  'Deer Valley',
  40.64,
  -111.48,
  'Intermediate',
  'Luxury',
  45,
  FALSE,
  8
),
(
  'Snowbird',
  40.58,
  -111.66,
  'Expert',
  'Advanced Riders',
  35,
  TRUE,
  8
),
(
  'Powder Mountain',
  41.38,
  -111.78,
  'Intermediate',
  'Powder',
  70,
  FALSE,
  7
),
(
  'Sundance',
  40.39,
  -111.58,
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
),
(
  'The Forklift',
  3,
  'Snowbird Center / Plaza Deck',
  0.0,
  '$$',
  'Bustling, casual, slopeside apres with a sunny deck',
  8
),
(
  'SeventyOne Lounge',
  3,
  'The Cliff Lodge',
  0.0,
  '$$',
  'Retro-cool lounge with apres bites and drinks',
  8
),
(
  'The Atrium',
  3,
  'The Cliff Lodge',
  0.0,
  '$$',
  'Relaxed lodge atmosphere with live apres music',
  8
),
(
  'The Powder Keg',
  4,
  'Timberline Lodge',
  0.0,
  '$$',
  'Lively mountain pub with local beer, food, and live music',
  9
),
(
  'Lucky Slice',
  4,
  'Sundown Lodge',
  0.0,
  '$',
  'Casual slopeside pizza and drinks with night skiing',
  7
),
(
  'Hidden Lake Lodge',
  4,
  'Hidden Lake',
  0.0,
  '$$',
  'Relaxed mountain lodge with food, drinks, and panoramic views',
  7
),
(
  'Owl Bar',
  5,
  'Sundance Resort Village',
  0.0,
  '$$',
  'Historic western bar with cocktails, bar food, and live music',
  9
),
(
  'Foundry Grill',
  5,
  'Sundance Resort Village',
  0.0,
  '$$$',
  'Rustic upscale dining with hearty mountain comfort food',
  8
),
(
  'Library Lounge',
  5,
  'Sundance Resort Village',
  0.0,
  '$$$',
  'Intimate upscale lounge with handcrafted cocktails and small plates',
  8
);