import express from "express";
import db from "../db/sqlite.js";
const router = express.Router();

router.get("/posts", (req, res) => {
  getUsers()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.sendStatus(500);
    });
});

function getUsers() {
  return new Promise((resolve, reject) => {
    db.all("select title, content from posts", (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

export default router;
