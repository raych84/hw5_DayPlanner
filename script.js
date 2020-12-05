// Global variables
let time = 0;
let today = new Date();
let date = today.getDate();


$(document).ready(function () {
	$("button").on("click", function() {
	
		//Store data
		var value = $(this).siblings("input").val();
		var time = $(this).parent().attr("id");
		localStorage.setItem(time, value);
	});

	// Today's date:
	document.getElementById("currentDay").innerHTML = today;


	// Add an event to each hour
	function addNewEventToHourBlock() {
		// holds current hour.
		let currentHour = moment().hours();
		// function for each class block to check if time is in the past, present or future
		$(".hour-block").each(function () {
			let timeBlock = parseInt($(this).attr("id").split("-")[1]);
			// check if timeblock is in the past
			if (timeBlock < currentHour) {
				$(this).addClass("past");
			}
			// check if timeblock is in the present
			else if (timeBlock === currentHour) {
				$(this).removeClass("past");
				$(this).addClass("present");
			}
			// check if timeblock is in the future
			else {
				$(this).removeClass("past");
				$(this).removeClass("present");
				$(this).addClass("future");
			}
		});
	};
	addNewEventToHourBlock()

	// Retrieve Data

	$("#9a .form-control").val(localStorage.getItem("9a"));
	$("#10a .form-control").val(localStorage.getItem("10a"));
	$("#11a .form-control").val(localStorage.getItem("11a"));
	$("#12p .form-control").val(localStorage.getItem("12p"));
	$("#1p .form-control").val(localStorage.getItem("1p"));
	$("#2p .form-control").val(localStorage.getItem("2p"));
	$("#3p .form-control").val(localStorage.getItem("3p"));
	$("#4p .form-control").val(localStorage.getItem("4p"));
	$("#5p .form-control").val(localStorage.getItem("5p"));
	// Change color of hour block
	$("input").focus(function () {
		$(this).css("background-color", "yellow");
	});
	$("input").blur(function () {
		$(this).css("background-color", "pink");
	});
})


// https://www.w3schools.com/jquery/event_on.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem localstorage literatue