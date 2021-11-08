//// VARS
var container = $(".container");
let row = 0;
var defaultRow =
  '<div id="row" class="row">' +
  '<div id="timeCol" class="col border border-2 border-secondary border-start-0"></div>' +
  '<div id="taskCol" class="col-10 bg-secondary border border-light bg-opacity-25"></div>' +
  '<div id="saveCol" class="col bg-info border border-light rounded-end rounded-3"></div>' +
  "</div>";

//// FUNCTIONS
// to make the first row - testing to get function working properly

// create container to hold each row (time, task, save)
var createRow = function (rowNum) {
  container.append(rowNum);
};

// change element's id to reflect their time block
var changeId = function (id, index) {
  $(id).attr("id", id + index);
};

// function to append time <p> to timeCol
var appendTime = function (id, index) {
  $(id + index);
  $("#timeCol").append("<p>" + (index + 8) + "AM</p>");
};

// function to create 9 rows
var createTimeRow = function () {
  while (row < 9) {
    row++;
    createRow(defaultRow);
    // make row id reflect place on list
    changeId("#row", row);
    // at time within timeCol to reflect hours 9-5pm
    appendTime("#row", row);
    console.log("append next time");
  }
};

createTimeRow();

// create function currentTime() that increases from 9am-5pm (9 rows)

// START PLANNER

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
