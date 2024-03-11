import api from "../api/data.js";

document.getElementById("btn").addEventListener("click", () => {
  const val = document.getElementById("input").value;
  const p = document.getElementById("p");
  console.log(val);
  api
    .getWithBody("/commandInjection/echo", val)
    .then((data) => (p.innerHTML = data.content))
    .catch((e) => console.log(e));
});
