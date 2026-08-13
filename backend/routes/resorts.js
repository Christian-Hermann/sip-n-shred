import express from "express";

const router = express.Router();

const resorts = [
  {
    id: 1,
    name: "Park City",
    newSnow: 8,
    difficulty: "Intermediate",
    bestFor: "Families",
    driveFromAirport: 45,
    hasTerrainPark: true,
    apresRating: 9,
  },
  {
    id: 2,
    name: "Deer Valley",
    newSnow: 8,
    difficulty: "Intermediate",
    bestFor: "Luxury",
    driveFromAirport: 45,
    hasTerrainPark: false,
    apresRating: 8,
  },
];

router.get("/", (req, res) => {
  res.json(resorts);
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.json({ messgae: "Check the Terminal!" });
});

export default router;
