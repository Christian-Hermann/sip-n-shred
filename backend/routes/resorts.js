import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM resorts");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const resortId = Number(req.params.id);

    const result = await pool.query("SELECT * FROM resorts WHERE id = $1", [
      resortId,
    ]);

    const resort = result.rows[0];

    if (!resort) {
      return res.status(404).json({ message: "Resort not found" });
    }

    res.json(resort);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
