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

// change color of row based on time
var updateBlockColor = function (index) {
  $("#row" + index).each(function () {
    //get an ID for current time block
    var getTime = moment(
      $("#timeCol" + index)
        .text()
        .trim(),
      "H"
    );
    //get current hour using moment()
    var currentHour = moment();
    // debugger;
    var duration = parseInt(
      Math.ceil(moment.duration(getTime.diff(currentHour)).asHours())
    );
    //write IF condition to compare time block and moment() hour and assign class accordingly
    if (duration < 0) {
      // remove old class
      $("#row" + index)
        .children("#taskText")
        .removeClass("future");
      $("#row" + index)
        .children("#taskText")
        .addClass("past");
    }
    if (duration === 0) {
      // task area red
      $("#row" + index)
        .children("#taskText")
        .removeClass("future");
      $("#row" + index)
        .children("#taskText")
        .addClass("present");
    }
  });
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
