//// VARS
var container = $(".container");
// var colSel = document.querySelector("#timeCol");
let row = 0;

var defaultRow =
  '<div id="row" class="row">' +
  '<div id="timeCol" class="col border border-2 border-secondary border-start-0 hour time-block"></div>' +
  '<textarea id="taskText" class="col-10 future border border-light description"></textarea>' +
  '<button id="saveButton" class="col bg-info border border-light rounded-end rounded-3 far fa-save saveBtn"></button>' +
  "</div>";

var now = moment().format("dddd, MM.D.YYYY - hh:mm:ss a");
$("#currentDay").append(now);

//// FUNCTIONS
// create container to hold each row (time, task, save)
var createRow = function (rowNum) {
  container.append(rowNum);
};

// change element's id to reflect their time block
var changeId = function (id, index) {
  $("#" + id).attr("id", id + index);
};

// function to append time <p> to timeCol
var appendTime = function (index) {
  $("#timeCol" + index).append("<p>" + [index + 8] + ":00</p>");
};

// function to create 9 rows
var createTimeRow = function () {
  while (row < 9) {
    row++;
    createRow(defaultRow);
    changeId("row", row);
    changeId("timeCol", row);
    // at time within timeCol to reflect hours 9-5pm
    appendTime(row);
    getTask(row);
    updateBlockColor(row);
  }
};

// change color of row based on time
var updateBlockColor = function (index) {
  // get's current time
  var getTime = $("#row1" + [index + 8])
    .find(".timeCol")
    .text()
    .trim();
  console.log(getTime);

  // moment($(this), "H HH").text().trim();
  // var duration = Math.ceil(moment.duration(hours.diff(moment())).asHours());

  //   // get row + 8 and compare to current time from moment()
  //   if (){
  //     // task area grey
  //     append(".past");
  //   }
  //   if else {
  //     // task area red
  //     append(".present")
  //   }
};

// save task to localStorage
function saveTask(event) {
  var description = $(event.target).prev(".description").val();
  var id = $(event.target).parent(".row").attr("id");
  localStorage.setItem(id, description);
}

function getTask(row) {
  var key = "row" + row;
  var description = localStorage.getItem(key);
  $("#row" + row)
    .children(".description")
    .text(description);
}

// START PLANNER
createTimeRow();
$(document).on("click", saveTask);

// create function currentTime() that increases from 9am-5pm (9 rows)

// create containers with 9 rows
//// each row has 3 columns
//// one column for time (9am - 5pm)
//// one column for task
////// this column must be editable so when clicked user can input more text into field
////// then click 'enter' or save to save task
//// one column to save

// each colum must have a color
// time must be connected to moment.js
// refresh must happen every 30 minutes (1800000 ms)
//// if past grey
//// if current red
//// if future green
