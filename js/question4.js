console.log("Question-4");
// How to get the day and month of a year using JavaScript?
// When the program runs, it displays the day and the month.

// Output: Day is: Saturday - Month is: September

const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentDay = new Date();

const dayName = Days[currentDay.getDay()]; // Get the current day name

const month = Months[currentDay.getMonth()]; // Get the current month name

console.log("Click on the button to get the day and month of the date.");
console.log("Day - " + dayName + ", Month - " + month);
