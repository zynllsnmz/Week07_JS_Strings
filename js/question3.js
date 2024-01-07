console.log("Question-3");
// How to check if the given date is the weekend ?
// When the program runs, it displays whether or not the day is the weekend.

// Output: Today is the weekend. Or Today is not the weekend.

const date = new Date(); // Get the current date and time
const day = date.getDay(); // Get the day of the week

let result;
if (day === 6 || day === 0) {
  result = "Today is weekend";
} else {
  result = "Today is not weekend";
}
console.log(
  "Click on the button to check if the given date is Weekend or not."
);
console.log(`Date ${date}`);
console.log(result);
