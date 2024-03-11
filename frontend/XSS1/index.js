// innerHTML is being set directly to user input, not good.
document.getElementById("btn").addEventListener("click", () => {
  const inputVal = document.getElementById("input").value;
  console.log("input", inputVal);
  document.getElementById("name").innerHTML = inputVal;
});
