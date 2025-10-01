// aside-related
// open aside
const aside = document.querySelector("aside");
const openBtn = document.getElementById("barsIcon");

openBtn.addEventListener("click", () => {
  aside.classList.add("visible");
  console.log(aside.classList);
  console.log("aside opened");
});

// close aside funtion 
const closeBtn = document.getElementById("closeMenuAnchor");
closeBtn.addEventListener("click", () => {
  aside.classList.remove("visible");
  console.log("aside closed");
});