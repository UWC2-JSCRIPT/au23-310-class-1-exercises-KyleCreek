/**
 * MATH
 */
// Editing to meet the development requirement for class
// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
let d1 = 13;
let d2 = 17;
let c1 = 16.99;
let c2 = 19.99;

let a1 = Math.PI * Math.pow((d1 / 2), 2);
let a2 = Math.PI * Math.pow((d2 / 2), 2);

console.log("Small Pizza Area:", a1);
console.log("Large Pizza Area:", a2);

// 2. What is the cost per square inch of each pizza?
let cs1 = c1 / a1;
let cs2 = c2 / a2;

console.log("Small Pizza Cost Per Area:", cs1);
console.log("Large Pizza Cost Per Area:", cs2);


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
let card1 = Math.ceil(Math.random()*13);
let card2 = Math.ceil(Math.random()*13);
let card3 = Math.ceil(Math.random()*13);

console.log("Card 1:", card1);
console.log("Card 2:", card2);
console.log("Card 3:", card3);

// Find the Maximum 

console.log("Maximum Card Value", Math.max(card1, card2, card3));

// 4. Draw 3 cards and use Math to determine the highest
// card


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
let firstName = 'Kyle';
let lastName = 'Creek';
let streetAddress = '5607 S. 303rd St.';
let city = 'Auburn';
let state = 'Washington';
let zipCode = '98001';

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
let address = `${firstName} ${lastName}\n${streetAddress}\n${city}, ${state} ${zipCode}`
console.log(address);
// Extract the First Name from the address
let firstNameIndex = address.indexOf(firstName);
let firstNameEnd = address.indexOf(firstName) + firstName.length;
console.log(address.slice(firstNameIndex, firstNameEnd));
/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
let date1 = new Date(2020, 0, 1, 0, 0, 0);
let date2 = new Date(2020, 3, 1, 0, 0, 0);
console.log("Date 1:", date1);
console.log("Date 2:", date2);

let halfDate = new Date((date1.getTime() + date2.getTime())/2);
console.log("Middle Date:", halfDate);
