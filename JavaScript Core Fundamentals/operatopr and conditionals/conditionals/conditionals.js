let marks = 75;

if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 70) {
  console.log("B grade");
} else {
  console.log("C grade");
}

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;

  case "Friday":
    console.log("Weekend coming");
    break;

  default:
    console.log("Normal day");
}

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);