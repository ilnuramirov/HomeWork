let hasLicense = confirm("Do you have a driver's license?");
let age = prompt("What is your age?");
let isDrinking = confirm("Are you currently drinking?");
(hasLicense && age >= 18 && !isDrinking) ? alert("You can drive.") : alert("You cannot drive.");