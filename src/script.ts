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
};

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
  area: "VI",
};

// Module 5: DOM & Event Typing in the Browser
// 1. querySelector returns HTMLElement | null by default:
const heading = document.querySelector("h1") as HTMLHeadingElement | null;

const paragraph = document.querySelector("p") as HTMLParagraphElement | null;

// 2. Form Inputs have properties like .value that general elements don't:
// Use Type Assertions (as HTMLInputElement) when you know the exact tag:
const searchInput = document.querySelector("#search-input") as HTMLInputElement;

console.log(searchInput.value); // Now TypeScript knows this is an input element

// 3. Typing Event Listeners:
searchInput.addEventListener("input", (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log(`Typing: ${target.value}`);
});

const submitForm = document.querySelector("#add-spot-form") as HTMLFormElement;
submitForm.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  console.log("Form submitted!");
});

// Module 6: Introduction to Generics (<T>)
function getFromStorage<T>(key: string, fallbackValue: T): T {
  const rawData = localStorage.getItem(key);
  if (!rawData) {
    return fallbackValue;
  }
  try {
    return JSON.parse(rawData) as T;
  } catch (error) {
    console.error("Error parsing data from localStorage:", error);
    return fallbackValue;
  }
}

// 1. Reading an array of numbers:
const savedIds = getFromStorage<number[]>("favorite_ids", []);
savedIds.push(10); // Fully autocompleted as number[]!

// 2. Reading a user object:
interface UserProfile {
  name: string;
  theme: "light" | "dark";
}

const userProfile = getFromStorage<UserProfile>("user_pref", {
  name: "Guest",
  theme: "light",
});
console.log(userProfile.theme); // Fully autocompleted!

// Week 10 Hands-on Classroom Exercises

interface Student {
  id: number;
  name: string;
  completedWeeks: number[];
}

const students: Student[] = [
  { id: 1, name: "Alice", completedWeeks: [1, 2, 3] },
  { id: 2, name: "Bob", completedWeeks: [1, 2] },
  { id: 3, name: "Charlie", completedWeeks: [1, 2, 3, 4] },
];