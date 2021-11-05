//// VARS
var container = $(".container");
var rows = 0;

//// FUNCTIONS
// to make the first row - testing to get function working properly
row1 =
  '<div id="timeCol" class="row col-1 border-start-0 border-secondary"></div> ' +
  '<div id="taskCol" class="col-10"></div>' +
  '<div id="saveCol" class="col-1"></div>';

// create container to hold each row (time, task, save)
var createContainer = function (idContent) {
  $(".container").append(idContent);
};

// creates a row for each hour
var createRow = createContainer(row1);
//   timeBox = createContainer(
//     '<div id="timeCol" class="row col-1 border-start-0 border-secondary"></div>'
//   );
//   taskBox = createContainer('<div id="taskCol" class="col-10"></div>');
//   saveBox = createContainer('<div id="saveCol" class="col-1"></div>');
// };
createRow();
// create 3 containers to hold
// createContainer(
//   '<div id="timeCol" class="row col-1 border-start-0 border-secondary"></div>',
//   '<p>"time"</p>'
// );
// console.lot("time container");
// createContainer('<div id="taskCol" class="col-10"></div>', "task");
// console.lot("task container");
// createContainer('<div id="saveCol" class="col-1"></div>', "save");
// console.lot("save container");

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
