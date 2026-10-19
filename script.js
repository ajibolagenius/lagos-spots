/* Arrays and Objects: Data Structures */

// const lagosSpots = ["Lekki Conservation Centre", "Nike Art Gallery", "Tarkwa Bay Beach", "National Museum Lagos",];

// Objects

// const openingHours = {
//   mon: "9am - 6pm",
//   wed: "9am - 8pm",
//   fri: "9am - 11pm",
// };

// // 1. Object.keys() -> Array of property names
// console.log(Object.keys(openingHours));

// // 2. Object.values() -> Array of property values
// console.log(Object.values(openingHours));

// // 3. Object.entries() -> Array of [key, value] pairs
// console.log(Object.entries(openingHours));

const spots = [
  { id: 1, name: "Terra Kulture", category: "Food", area: "Victoria Island", fee: 0 },
  { id: 2, name: "Nike Art Gallery", category: "Art", area: "Lekki", fee: 0 },
  { id: 3, name: "Bogobiri House", category: "Music", area: "Ikoyi", fee: 2500 },
  { id: 4, name: "Lekki Conservation Centre", category: "Nature", area: "Lekki", fee: 1500 }
];

console.log(spots[0])
console.log(spots[0].name)