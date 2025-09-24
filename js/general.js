// open aside funtion
function openAside() {
  console.log("openaside clicked");
  document.getElementById("aside").style.width = "10%";
  document.getElementById("aside").style.display = "inline";
  document.getElementById("aside").style.transition = "ease-in 5s";
  document.getElementById("main").style.width = "75%";
  document.getElementById("main").style.marginright = "4%";
};

// close aside funtion 
function closeAside() {
  document.getElementById("aside").style.width = "0";
  document.getElementById("aside").style.display = "none";
  document.getElementById("aside").style.transition = "ease-out 5s";
  document.getElementById("main").style.width = "100%";
  document.getElementById("main").style.marginright = "2%";
};

// starting functions on load

window.onload = function () {
  const courseStatusFields = document.querySelectorAll(".coursestatus");
  courseStatusLooper(courseStatusFields);

  const examStatusFields = document.querySelectorAll(".examstatus");
  examStatusLooper(examStatusFields);
};

// course status colors

function courseStatusLooper(allElements) {
  for (let i = 0; i < allElements.length; i++) {
    courseStatusColorCode(allElements[i])
  };
};

function courseStatusColorCode(element) {
  if (element.innerHTML == "Upcoming") {
    element.style.backgroundColor = "#b34d5998";
  } else if (element.innerHTML == "In Progress") {
    element.style.backgroundColor = "#782138c3";
  } else if (element.innerHTML == "Partially Passed") {
    element.style.backgroundColor = "#53ff5986";
  } else if (element.innerHTML == "Passed") {
    element.style.backgroundColor = "#53ff59c2";
  } else if (element.innerHTML == "Failed") {
    element.style.backgroundColor = "#ff3b5298";
  };
};

// exam status colors

function examStatusLooper(allElements) {
  for (let i = 0; i < allElements.length; i++) {
    examStatusColorCode(allElements[i])
  };
};

function examStatusColorCode(element) {
    if (element.innerHTML == "To be taken") {
      element.style.backgroundColor = "#b34d5998";
    } else if (element.innerHTML == "To be graded") {
      element.style.backgroundColor = "#782138c3";
    } else if (element.innerHTML == "Failed waiting resit") {
      element.style.backgroundColor = "#ff3b5296";
    } else if (element.innerHTML == "Passed") {
      element.style.backgroundColor = "#53ff59c2";
    } else if (element.innerHTML == "Failed") {
      element.style.backgroundColor = "#ff3b52da";
    };
};

// progress bar calculator
