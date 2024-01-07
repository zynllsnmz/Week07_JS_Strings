console.log("Question-2");
// In a given list convert name and surname pairs to its initials.

// e.g.
// const namesArr=["roronoa zoro", "vinsmoke sanji", "tony tony chopper", "gold roger"];

// Output: ["RZ", "VS", "TTC", "GR"]

const namesArr = [
  "roronoa zoro",
  "vinsmoke sanji",
  "tony tony chopper",
  "gold roger",
];
for (let i = 0; i < namesArr.length; i++) {
  const fullName = namesArr[i].split(" ");
  let initials = "";
  for (const name of fullName) {
    initials = initials + name.charAt(0).toUpperCase();
  }
  namesArr[i] = initials;
}
console.log(namesArr); //Output: ['RZ', 'VS', 'TTC', 'GR']
