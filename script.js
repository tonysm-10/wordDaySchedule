

$(document).ready(function() {
  var myTextArea1 = $('#textarea1');
  var myTextArea2 = $('#textarea2');
  var myTextArea3 = $('#textarea3');
  var myTextArea4 = $('#textarea4');
  var myTextArea5 = $('#textarea5');
  var myTextArea6 = $('#textarea6');
  var myTextArea7 = $('#textarea7');
  var myTextArea8 = $('#textarea8');
  var myTextArea9 = $('#textarea9');
  
  var saveBtn1 = $('#saveBtn1');
  var saveBtn2 = $('#saveBtn2');
  var saveBtn3 = $('#saveBtn3');
  var saveBtn4 = $('#saveBtn4');
  var saveBtn5 = $('#saveBtn5');
  var saveBtn6 = $('#saveBtn6');
  var saveBtn7 = $('#saveBtn7');
  var saveBtn8 = $('#saveBtn8');
  var saveBtn9 = $('#saveBtn9');



  // Retrieve saved value from local storage on page load
  if (localStorage.getItem('textAreaValue1')) {
    myTextArea1.val(localStorage.getItem('textAreaValue1'));
  }
  if (localStorage.getItem('textAreaValue2')) {
    myTextArea2.val(localStorage.getItem('textAreaValue2'));
  }
  if (localStorage.getItem('textAreaValue3')) {
    myTextArea3.val(localStorage.getItem('textAreaValue3'));
  }
  if (localStorage.getItem('textAreaValue4')) {
    myTextArea4.val(localStorage.getItem('textAreaValue4'));
  }
  if (localStorage.getItem('textAreaValue5')) {
    myTextArea5.val(localStorage.getItem('textAreaValue5'));
  }
  if (localStorage.getItem('textAreaValue6')) {
    myTextArea6.val(localStorage.getItem('textAreaValue6'));
  }
  if (localStorage.getItem('textAreaValue7')) {
    myTextArea7.val(localStorage.getItem('textAreaValue7'));
  }
  if (localStorage.getItem('textAreaValue8')) {
    myTextArea8.val(localStorage.getItem('textAreaValue8'));
  }
  if (localStorage.getItem('textAreaValue9')) {
    myTextArea9.val(localStorage.getItem('textAreaValue9'));
  }

  // Save text area value to local storage on button click
  saveBtn1.on('click', function() {
    localStorage.setItem('textAreaValue1', myTextArea1.val());
    alert('Text area 1 value saved!');
  });
  saveBtn2.on('click', function() {
    localStorage.setItem('textAreaValue2', myTextArea2.val());
    alert('Text area 2 value saved!');
  });
  saveBtn3.on('click', function() {
    localStorage.setItem('textAreaValue3', myTextArea3.val());
    alert('Text area 3 value saved!');
  });
  saveBtn4.on('click', function() {
    localStorage.setItem('textAreaValue4', myTextArea4.val());
    alert('Text area 4 value Saved!')
  });
  saveBtn5.on('click', function() {
    localStorage.setItem('textAreaValue5', myTextArea5.val());
    alert('Text area 5 value Saved!')
  });
  saveBtn6.on('click', function() {
    localStorage.setItem('textAreaValue6', myTextArea6.val());
    alert('Text area 6 value Saved!')
  });
  saveBtn7.on('click', function() {
    localStorage.setItem('textAreaValue7', myTextArea7.val());
    alert('Text area 7 value Saved!')
  });
  saveBtn8.on('click', function() {
    localStorage.setItem('textAreaValue8', myTextArea8.val());
    alert('Text area 8 value Saved!')
  });
  saveBtn9.on('click', function() {
    localStorage.setItem('textAreaValue9', myTextArea9.val());
    alert('Text area 9 value Saved!')
  });

});









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