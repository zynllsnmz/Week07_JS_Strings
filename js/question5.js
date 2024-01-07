console.log("Question-5");
// What regular expression pattern (RegEx) is typically
//used to correctly match Swiss license plate numbers, such as "AG 124 234",
// "ZH 783 499" where the format consists of two uppercase alphabetical characters (A to Z),
// followed by a space, three digits, another space, and then three more digits?

const licence = "AG 124 234";
const licence2 = "AG 124 23923";

const licenceRegex = /^[A-Z]{2} \d{3} \d{3}$/;

console.log("AG 124 234 " + licenceRegex.test(licence)); //"AG 124 234"; true
console.log("AG 124 23923 " + licenceRegex.test(licence2)); //"AG 124 23923"; false
