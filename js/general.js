// open aside funtion
function openAside() {
  console.log("openaside clicked");
  document.getElementById("aside").style.width = "10%";
  document.getElementById("aside").style.display = "inline";
  document.getElementById("aside").style.transition = "ease-in 5s";
  document.getElementById("main").style.width = "75%";
  document.getElementById("main").style.marginright = "4%";
}

// close aside funtion 
function closeAside() {
  document.getElementById("aside").style.width = "0";
  document.getElementById("aside").style.display = "none";
  document.getElementById("aside").style.transition = "ease-out 5s";
  document.getElementById("main").style.width = "100%";
  document.getElementById("main").style.marginright = "2%";
}

// course status colors


// exam status colors


// progress bar calculator
