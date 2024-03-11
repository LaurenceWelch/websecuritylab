import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import router from "./router.js";
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static("frontend"));
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/frontend/main.html"));
});

app.all((req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`app running at: http://localhost:${port}`);
});
