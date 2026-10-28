const STORAGE_KEY = "lagos-spots";
const spotForm = document.querySelector("#add-spot-form");
const spotsContainer = document.querySelector("#spots-list");
const statusMessage = document.querySelector("#spots-status");

const categoryLabels = {
  food: "Food & Dining",
  nightlife: "Nightlife & Drinks",
  study: "Co-working & Study",
  events: "Arts & Events",
};

function isSpot(spot) {
  return (
    spot !== null &&
    typeof spot === "object" &&
    typeof spot.id === "number" &&
    typeof spot.name === "string" &&
    typeof spot.category === "string" &&
    typeof spot.area === "string" &&
    typeof spot.description === "string"
  );
}

function loadSpots() {
  const savedSpots = localStorage.getItem(STORAGE_KEY);

  if (savedSpots === null) {
    return [];
  }

  const spots = JSON.parse(savedSpots);

  if (!Array.isArray(spots) || !spots.every(isSpot)) {
    throw new TypeError("Saved Lagos Spots data has an invalid format.");
  }

  return spots;
}

function createSpotCard(spot) {
  // Create DOM elements instead of building markup with innerHTML.
  const card = document.createElement("article");
  card.className = "spot-card spot-card--submitted";
  card.dataset.id = spot.id;

  const cardBody = document.createElement("div");
  cardBody.className = "spot-card__body";

  const meta = document.createElement("div");
  meta.className = "spot-card__meta";

  const category = document.createElement("span");
  category.className = "spot-card__category";
  category.textContent = categoryLabels[spot.category] || spot.category;

  const area = document.createElement("span");
  area.className = "spot-card__area";
  area.textContent = spot.area;

  const title = document.createElement("h3");
  // textContent displays user input as text, not executable HTML.
  title.textContent = spot.name;

  const description = document.createElement("p");
  description.textContent = spot.description;

  meta.append(category, area);
  cardBody.append(meta, title, description);
  // Append the completed card to the page's spots list.
  card.append(cardBody);

  return card;
}

function showStorageError(error) {
  console.error("Could not read or save Lagos Spots in browser storage.", error);
  statusMessage.textContent =
    "Your recommendations could not be loaded or saved in this browser.";
}

let spots = [];

try {
  spots = loadSpots();
  spots.forEach((spot) => spotsContainer.append(createSpotCard(spot)));
} catch (error) {
  showStorageError(error);
}

if (spotForm) {
  spotForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(spotForm);
    const newSpot = {
      id: Date.now(),
      name: String(formData.get("spotName") || "").trim(),
      category: String(formData.get("category") || ""),
      area: String(formData.get("area") || "").trim(),
      description: String(formData.get("description") || "").trim(),
    };

    try {
      spots = [...loadSpots(), newSpot];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(spots));
    } catch (error) {
      showStorageError(error);
      return;
    }

    console.log("New Spot Ready to Save:", newSpot);
    spotsContainer.append(createSpotCard(newSpot));
    spotForm.reset();
    statusMessage.textContent = `${newSpot.name} was added to the Explore list.`;
  });
}
