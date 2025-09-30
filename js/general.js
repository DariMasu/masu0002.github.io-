/**
 * loops through a nodelist containing cells from the course status column
 * @param  {NodeList} allElements list to loop through
 */
function courseStatusLooper(allElements) {

  for (let i = 0; i < allElements.length; i++) {
    courseStatusColorCode(allElements[i]);
  }
}

/**
 * changes colors of cells depending on their content (the status of the course)
 * @param  {HTMLElement} a cell from the NodeList which contains the status
 */
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
  }
}

/**
 * loops through a nodelist containing cells from the exam status column
 * @param  {NodeList} allElements list to loop through
 */
function examStatusLooper(allElements) {
  for (let i = 0; i < allElements.length; i++) {
    examStatusColorCode(allElements[i]);
  }
}

/**
 * changes colors of cells depending on their content (the status of the exam)
 * @param  {HTMLElement} a cell from the NodeList which contains the status
 */
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
  }
}

/**
 * Calculates and displays the currentResult (ECs already obtained) 
 * and potentialResult (currentResult + ECs that can be obtained after resiting exams)
 * @param  {NodeList} ecList list of ecs per exam
 * @param  {NodeList} gradeList list of grades per exam
 * @param  {NodeList} examStatusList list of statuses of exams
 */
function progressCalculator(ecList, gradeList, examStatusList) {
  let potentialResult = 0;
  let currentResult = 0;
  let ecArray = Array.from(ecList);
  let gradeArray = Array.from(gradeList);
  let examStatusArray = Array.from(examStatusList);
  let curGrade;

  for (let i = 0; i < gradeArray.length; i++) {
    curGrade = gradeArray[i].innerHTML;

    if (curGrade >= 5.5) {
      currentResult += parseFloat(ecArray[i].innerHTML);
    } else if (curGrade <= 5.5 && examStatusArray[i].innerHTML == "Failed waiting resit") {
      potentialResult += parseFloat(ecArray[i].innerHTML);
    }
  }

  potentialResult += currentResult;
  document.getElementById("potentialresult").innerHTML = potentialResult;
  document.getElementById("potentialprogress").style.width = ((potentialResult / 60) * 100).toFixed(2) + "%";
  console.log(document.getElementById("potentialprogress").style.width);
  document.getElementById("curresult").innerHTML = currentResult;
  document.getElementById("currentprogress").style.width = ((currentResult / 60) * 100).toFixed(2) + "%";
  console.log(document.getElementById("currentprogress").style.width);
}

// taking the needed table cells and calling related funcions
const courseStatusFields = document.querySelectorAll(".coursestatus");
courseStatusLooper(courseStatusFields);

const examStatusFields = document.querySelectorAll(".examstatus");
examStatusLooper(examStatusFields);

const ecFields = document.querySelectorAll(".ecs");
const gradeFields = document.querySelectorAll(".grade");
progressCalculator(ecFields, gradeFields, examStatusFields);

// aside-related
// open aside funtion
const aside = document.querySelector("aside");
const openBtn = document.getElementById("barsicon");
console.log(openBtn);

openBtn.addEventListener("click", () => {
  aside.classList.add("visible");
});

// close aside funtion 
const closeBtn = document.getElementById("closemenuanchor");
closeBtn.addEventListener("click", () => {
  aside.classList.remove("visible");
});