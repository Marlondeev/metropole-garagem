import { Router } from "express";
import { connection } from "../db";

const router = Router();

router.get("/:owner", async (req, res) => {
  const [rows] = await connection.execute(
    "SELECT * FROM vehicles WHERE owner = ?",
    [req.params.owner]
  );
  res.json(rows);
});

router.post("/", async (req, res) => {
  const { plate, model, color, customization, owner } = req.body;
  await connection.execute(
    "INSERT INTO vehicles (plate, model, color, customization, owner) VALUES (?, ?, ?, ?, ?)",
    [plate, model, color, customization, owner]
  );
  res.sendStatus(201);
});

export default router;
