// aside-related
// open aside
const aside = document.querySelector("aside");
const openBtn = document.getElementById("barsIcon");

openBtn.addEventListener("click", () => {
  aside.classList.add("visible");
});

// close aside funtion 
const closeBtn = document.getElementById("closeMenuAnchor");
closeBtn.addEventListener("click", () => {
  aside.classList.remove("visible");
});