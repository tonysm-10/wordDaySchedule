// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});







var myTextArea = $('#textarea')

var saveBtn = $('.saveBtn')






var hour9 = $('#hour-9')
var hour10 = $('#hour-10')
var hour11 = $('#hour-11')
var hour12 = $('#hour-12')
var hour1 = $('#hour-1')
var hour2 = $('#hour-2')
var hour3 = $('#hour-3')
var hour4 = $('#hour-4')
var hour5 = $('#hour-5')

















                            //  HEADING TIME
var time = $('#currentDay')
var today = dayjs()
time.text(dayjs().format('MMM DD, YYYY'))
var clockElement = document.getElementById( "clock" );
function updateClock ( clock ) {
    clock.innerHTML = new Date().toLocaleTimeString();
}
setInterval(function () {
    updateClock( clockElement );
}, 1000);
 

////////////////////// PAST PRESENT AND FUTURE///////////////////////////
var presentHour = dayjs().format('hA')
console.log(presentHour)

// 9am section
var calendarHour9 = $('#workHour9')
if (calendarHour9.text() === presentHour) {
  hour9.addClass('present')
  hour10.addClass('future')
  hour11.addClass('future')
  hour12.addClass('future')
  hour1.addClass('future')
  hour2.addClass('future')
  hour3.addClass('future')
  hour4.addClass('future')
  hour5.addClass('future')
}
else {
 hour9.addClass('past')
}

// 10am section
var calendarHour10 = $('#workHour10')
if (calendarHour10.text() === presentHour) {
  hour10.addClass('present')
  hour11.addClass('future')
  hour12.addClass('future')
  hour1.addClass('future')
  hour2.addClass('future')
  hour3.addClass('future')
  hour4.addClass('future')
  hour5.addClass('future')
}
else {
 hour10.addClass('past')
}

// 11am section
var calendarHour11 = $('#workHour11')
if (calendarHour11.text() === presentHour) {
  hour11.addClass('present')
  hour12.addClass('future')
  hour1.addClass('future')
  hour2.addClass('future')
  hour3.addClass('future')
  hour4.addClass('future')
  hour5.addClass('future')
}
else {
 hour11.addClass('past')
}

// 12am section
var calendarHour12 = $('#workHour12')
if (calendarHour12.text() === presentHour) {
  hour12.addClass('present')
  hour1.addClass('future')
  hour2.addClass('future')
  hour3.addClass('future')
  hour4.addClass('future')
  hour5.addClass('future')
}
else {
 hour12.addClass('past')
}

// 1pm section
var calendarHour1 = $('#workHour1')
if (calendarHour1.text() === presentHour) {
  hour1.addClass('present')
  hour2.addClass('future')
  hour3.addClass('future')
  hour4.addClass('future')
  hour5.addClass('future')
}
else {
 hour1.addClass('past')
}

// 2pm section
var calendarHour2 = $('#workHour2')
if (calendarHour2.text() === presentHour) {
  hour2.addClass('present')
  hour3.addClass('future')
  hour4.addClass('future')
  hour5.addClass('future')
}
else {
 hour2.addClass('past')
}

// 3pm section
var calendarHour3 = $('#workHour3')
if (calendarHour3.text() === presentHour) {
  hour3.addClass('present')
  hour4.addClass('future')
  hour5.addClass('future')
}
else {
 hour3.addClass('past')
}

// 4pm section 
var calendarHour4 = $('#workHour4')
if (calendarHour4.text() === presentHour) {
  hour4.addClass('present')
  hour5.addClass('future')
}
else {
 hour4.addClass('past')
}

// 5pm section 
var calendarHour5 = $('#workHour5')
if (calendarHour5.text() === presentHour) {
  hour5.addClass('present')
}
else {
 hour5.addClass('past')
}