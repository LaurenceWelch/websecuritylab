import express from "express";
const router = express.Router();
import { exec } from "child_process";

router.get("/users", (req, res) => {
  res.sendStatus(500);
});

export default router;
