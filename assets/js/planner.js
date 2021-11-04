//// VARS
var container = $(".container");
var rows = 0;

//// FUNCTIONS

// create container to hold each task
var createContainer = function (idContent, innerText) {
  // function to create various columns
  var col = container.append(idContent);
  col.append(innerText);
  container.appendChild(col);
};

// create 3 containers to hold
createContainer(
  '<div id="timeCol" class="col-1 border-start-0 border-secondary"></div>',
  '<p>"time"</p>'
);
createContainer('<div id="taskCol" class="col-10"></div>', "task");
createContainer('<div id="saveCol" class="col-1"></div>', "save");

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
