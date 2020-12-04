// Global variables
let time = 0;
let today = new Date();
let date = today.getDate();
let input = document.querySelectorAll("#input");
let hour = document.querySelectorAll("#hour-block");


$(document).ready(function () {
	$("#save-event").on("click", function (event) {
		event.preventDefault();
		//Store data
		var value = $(this).children("input").val();
		var id = $(this).parent().attr("id")
		localStorage.setItem(id, value);
	});

	// Today's date:
	document.getElementById("currentDay").innerHTML = today;

	// View hour(s) and any events listed in hour

	// Add an event to each hour
	function addNewEventToHourBlock() {
		// holds current hour.
		let currentHour = moment().hours();
		// function for each class block to check if time is in the past, present or future
		$(".hour-block").each(function () {
			let timeBlock = parseInt($(this).attr("id"));
			// check if timeblock is in the past
			if (timeBlock < currentHour) {
				$(this).addClass("past");
			}
			// check if timeblock is in the present
			else if (hour === currentHour) {
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

	$("#9a .description").val(localStorage.getItem("9a"));
	$("#10a .description").val(localStorage.getItem("10a"));
	$("#11a .description").val(localStorage.getItem("11a"));
	$("#12p .description").val(localStorage.getItem("12p"));
	$("#1p .description").val(localStorage.getItem("1p"));
	$("#2p .description").val(localStorage.getItem("2p"));
	$("#3p .description").val(localStorage.getItem("3p"));
	$("#4p .description").val(localStorage.getItem("4p"));
	$("#5p .description").val(localStorage.getItem("5p"));

	// Save Event button


})


// https://www.w3schools.com/jquery/event_on.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem localstorage literatue