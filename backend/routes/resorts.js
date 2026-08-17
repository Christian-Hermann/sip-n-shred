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
  const resortId = Number(req.params.id);

  const resort = resorts.find((resort) => {
    return resort.id === resortId;
  });

  if (!resort) {
    return res.status(404).json({ message: "Resort not found" });
  }

  res.json(resort);
});

export default router;
