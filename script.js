/* Arrays and Objects: Data Structures */

// Module 6: Data Persistence with JSON & localStorage

const STORAGE_KEY = "lagos_spots_favorites";

// 1. Function to read saved favorites from storage safely:
function getSavedFavorites() {
  const savedData = localStorage.getItem("STORAGE_KEY");
  if (!savedData) {
    return []; // Return empty array if nothing was saved yet
  }
  try {
    return JSON.parse(savedData);
  } catch (error) {
    console.error("Corrupted storage data:", error);
    return [];
  }
}

// 2. Function to save favorites to storage:
function saveFavorites(favoritesArray) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritesArray));
}

// 3. Function to toggle a spot's favorite status:
function toggleFavorite(spotId) {
  const currentFavorites = getSavedFavorites();
  let updatedFavorites;

  if (currentFavorites.includes(spotId)) {
    // If already in favorites, remove it:
    updatedFavorites = currentFavorites.filter(id => id !== spotId);
    console.log(`Removed spot #${spotId} from favorites.`);
  } else {
    // If not in favorites, add it immutably:
    updatedFavorites = [...currentFavorites, spotId];
    console.log(`Added spot #${spotId} to favorites.`);
  }

  saveFavorites(updatedFavorites);
  return updatedFavorites;
}

console.log("Initial favorites:", getSavedFavorites());