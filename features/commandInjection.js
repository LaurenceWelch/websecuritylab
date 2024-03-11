import express from "express";
const router = express.Router();
import { exec } from "child_process";

router.post("/echo", (req, res) => {
  echoSomething(req.body.content)
    .then((data) => res.status(200).json({ content: data }))
    .catch((e) => res.sendStatus(500));
});

function echoSomething(str) {
  return new Promise((resolve, reject) => {
    exec("echo " + str, (e, stdout, stderr) => {
      try {
        if (e) {
          reject(e);
        } else if (stderr) {
          reject(stderr);
        } else {
          resolve(stdout);
        }
      } catch (e) {
        reject(e);
      }
    });
  });
}

export default router;
