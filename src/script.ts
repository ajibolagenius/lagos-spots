// Basic Primitive Types

/* Explicit type annotations */

let spotName: string = "Terra Kulture";
let entryFee: number = 2500;
let isOpen: boolean = true;
let discountCode: null = null;
let userRating: undefined = undefined;

// Type Inference

let city = "Lagos";
// city = 100;

let car: string;

// Array Types

// Array of strings:
const categories: string[] = ["Art", "Culture", "Music"];

// Array of numbers:
const ratings: number[] = [4.5, 4.8, 3.9, 5.0];

/* Module 3: Functions with Types */

function calculateDiscountedFee(
  fee: number,
  discountedPercentage: number,
): number {
  return fee - (fee * discountedPercentage) / 100;
}

const finalPrice = calculateDiscountedFee(5000, 20);
// console.log(finalPrice); // Output: 4000

// Optional Parameters & Void Returns

function logSpotDetails(name: string, area?: string): void {
  if (area) {
    console.log(`📍 ${name} located in ${area}`);
  } else {
    console.log(`📍 ${name}`);
  }
}

console.log(logSpotDetails("Terra Kulture", "Victoria Island"));
console.log(logSpotDetails("Nike Art Gallery"));

// Module 4: Interfaces & Custom Type

interface Spot {
  id: number;
  name: string;
  category: string;
  area: string;
  fee: number;
  description?: string;
  isFavorite?: boolean;
}

const spot1: Spot = {
  id: 1,
  name: "Terra Kulture",
  category: "Food",
  area: "Victoria Island",
  fee: 0,
};

const spot2: Spot = {
    id: 2,
    name: "Nike Art Gallery",
    category: "Art",
    area: "Lekki",
    fee: 500,
    description: "A vibrant art gallery showcasing contemporary Nigerian art.",
    isFavorite: true,
}

// 2. Union Types & Literal Types

// Define the allowed category options:
type Category = "Food" | "Art" | "Nightlife" | "Nature";
type Area = "VI" | "Lekki" | "Ikoyi" | "Yaba";

interface SpotWithStrictCategory {
  id: number;
  name: string;
  category: Category; // Must be one of the four allowed strings!
  area: Area;
}

const goodSpot: SpotWithStrictCategory = {
  id: 2,
  name: "Hard Rock Cafe",
  category: "Nightlife", // 🟢 Valid!
  area: "VI"
};