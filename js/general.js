// open aside funtion
function openAside() {
  document.getElementById("aside").style.width = "15%";
  document.getElementById("aside").style.display = "inline";
  document.getElementById("aside").style.transition = "color 0.3s ease"; 
  document.getElementById("main").style.width = "75%";
};

// close aside funtion 
function closeAside() {
  document.getElementById("aside").style.width = "0";
  document.getElementById("aside").style.display = "none";
  document.getElementById("aside").style.transition = "color 0.3s ease";
  document.getElementById("main").style.width = "100%";
};

// course status colors
function courseStatusLooper(allElements) {
  for (let i = 0; i < allElements.length; i++) {
    courseStatusColorCode(allElements[i]);
  };
};

function courseStatusColorCode(element) {
  if (element.innerHTML == "Upcoming") {
    element.style.backgroundColor = "#b34d5998";
  } else if (element.innerHTML == "In Progress") {
    element.style.backgroundColor = "#782138af";
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
    examStatusColorCode(allElements[i]);
    console.log(allElements);
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
function progressCalculator(ecList, gradeList, examStatusList) {
  let potentialResult = 0;
  let currentResult = 0;
};

// aside open and close animation
function toggleAsideAnimation() {
  document.getElementById("aside").classList
};

// starting functions on load
window.onload = function () {
  const courseStatusFields = document.querySelectorAll(".coursestatus");
  courseStatusLooper(courseStatusFields);

  const examStatusFields = document.querySelectorAll(".examstatus");
  examStatusLooper(examStatusFields);

  const ecFields = document.querySelectorAll(".ecs");
  const gradeFields = document.querySelectorAll(".grade");
  progressCalculator(ecFields, gradeFields, examStatusFields);
};