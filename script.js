/* Arrays and Objects: Data Structures */

// const spots = [
//   { id: 1, name: "Terra Kulture", category: "Food", area: "Victoria Island", fee: 0 },
//   { id: 2, name: "Nike Art Gallery", category: "Art", area: "Lekki", fee: 0 },
//   { id: 3, name: "Bogobiri House", category: "Music", area: "Ikoyi", fee: 2500 },
//   { id: 4, name: "Lekki Conservation Centre", category: "Nature", area: "Lekki", fee: 1500 }
// ];

// Modern Higher-Order Array Methods

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2);

// // function doubled(num) {
// //   return num * 2
// // }

// console.log(numbers)
// console.log(doubled)

// const spotNames = spots.map(spot => spot.name)
// console.log(spotNames)

// const cardList = spots.map(spot => {
//   return `<div class="spot-card"><h3>${spot.name}</h3><p>${spot.area}</p></div>`;
// });
// console.log(cardList[0]);

// Example 1: Filtering numbers
// const testScores = [45, 82, 90, 33, 76];

// const passingScore = testScores.filter(score => score >= 50)
// console.log(passingScore)

// Example 2: Real-world Lagos Spots filter:
// Get all free spots
// const freeSpots = spots.filter(spot => spot.fee === 0)
// console.log(freeSpots)

// User clicked on spot with ID 3:
// const selectedSpot = spots.find(spot => spot.id === 3);
// console.log(selectedSpot.name); // "Bogobiri House"

// const missingSpot = spots.find(spot => spot.id === 999);
// console.log(missingSpot); // undefined (Safe to check if (!missingSpot))

// const prices = [5000, 1500, 2500, 0];

// // Ascending sort (cheapest first): a - b
// const cheapestFirst = prices.toSorted((a, b) => a - b)
// console.log(cheapestFirst)
// console.log(prices)

// // Descending sort (most expensive first): b - a
// const expensiveFirst = prices.toSorted((a, b) => b - a);
// console.log(expensiveFirst);

// // Sorting strings alphabetically: localeCompare
// const alphabetically = spots.toSorted((a, b) => a.name.localeCompare(b.name));
// console.log(alphabetically.map(s => s.name));

// const cartAmounts = [1200, 3500, 2000, 800];

// // Summing an array of numbers:
// const totalSpent = cartAmounts.reduce((accumulator, currentAmount) => {
//   return accumulator + currentAmount;
// }, 0);

// console.log(`Total: ₦${totalSpent}`);

// const sampleCategories = ["Food", "Art", "Food", "Music", "Food", "Art"];

// const categoryCounts = sampleCategories.reduce((acc, category) => {
//   acc[category] = (acc[category] || 0) + 1;
//   return acc;
// }, {});

// console.log(categoryCounts);
// // { Food: 3, Art: 2, Music: 1 }

// Module 5: Modern ES6+ Data Tools

const spot = {
  name: "Terra Kulture",
  category: "Food",
  area: "Victoria Island",
  rating: 4.8
};

const { name, area, rating, fee = 0 } = spot;