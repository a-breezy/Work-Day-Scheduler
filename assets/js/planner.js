//// VARS
var container = $(".container");

//// FUNCTIONS
// create container within div.container
var createContainer = function() {
    for (var container = 0; container < 3, container++) {
        container.append("<div></div>");
        container.append
    };
};

// START PLANNER

// create containers with 9 rows
// each row has 3 columns
// one column for time (9am - 5pm)
// one column for task
// this column must be editable so when clicked user can input more text into field
// then click 'enter' or save to save task
// one column to save
// each colum must have a color
// time must be connected to moment.js
// refresh must happen every 30 minutes (1800000 ms)
// if past grey
// if current red
// if future green
