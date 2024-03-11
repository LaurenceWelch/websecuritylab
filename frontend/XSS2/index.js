import api from "../api/data.js";

document.getElementById("btn").addEventListener("click", () => {
  console.log("click");
  api.get("/xss2/posts").then((data) => {
    const p = document.getElementById("p");
    p.innerHTML = JSON.stringify(data);
  });
});
