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

const placeSearchForm = document.querySelector("#place-search-form");
const placeSearchInput = document.querySelector("#place-search-input");
const placeSearchButton = document.querySelector("#place-search-submit");
const placeSearchStatus = document.querySelector("#place-search-status");
const placeSearchError = document.querySelector("#place-search-error-message");
const placeSearchFieldError = document.querySelector("#place-search-error");
const placeSearchSelection = document.querySelector("#place-search-selection");
const placeSearchResults = document.querySelector("#place-search-results");
const nominatimMinimumInterval = 1000;
let lastNominatimRequestAt = 0;
let isSearchingPlaces = false;

function isGeocodingResult(place) {
  return (
    place !== null &&
    typeof place === "object" &&
    typeof place.display_name === "string" &&
    typeof place.lat === "string" &&
    typeof place.lon === "string" &&
    (place.name === undefined || typeof place.name === "string")
  );
}

async function searchLagosPlaces(searchTerm) {
  const waitTime = Math.max(
    0,
    nominatimMinimumInterval - (Date.now() - lastNominatimRequestAt),
  );

  if (waitTime > 0) {
    await new Promise((resolve) => setTimeout(resolve, waitTime));
  }

  lastNominatimRequestAt = Date.now();
  const query = encodeURIComponent(`${searchTerm}, Lagos, Nigeria`);
  const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&countrycodes=ng&limit=3&accept-language=en&q=${query}`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`OpenStreetMap returned status ${response.status}.`);
  }

  const places = await response.json();

  if (!Array.isArray(places) || !places.every(isGeocodingResult)) {
    throw new TypeError("OpenStreetMap returned places in an unexpected format.");
  }

  return places;
}

function clearPlaceSearchFieldError() {
  placeSearchInput.removeAttribute("aria-invalid");
  placeSearchFieldError.hidden = true;
  placeSearchFieldError.textContent = "";
}

function createPlaceResult(place) {
  const item = document.createElement("li");
  item.className = "place-search__item";

  const button = document.createElement("button");
  button.className = "place-search__result";
  button.type = "button";

  const title = document.createElement("span");
  title.className = "place-search__result-title";
  title.textContent = place.name || place.display_name.split(",")[0];

  const address = document.createElement("span");
  address.className = "place-search__result-address";
  address.textContent = place.display_name;

  button.append(title, address);
  button.addEventListener("click", () => {
    placeSearchSelection.textContent =
      `Coordinates for ${title.textContent}: ${place.lat}, ${place.lon}`;
    placeSearchSelection.hidden = false;
  });

  item.append(button);
  return item;
}

if (
  placeSearchForm &&
  placeSearchInput &&
  placeSearchButton &&
  placeSearchStatus &&
  placeSearchError &&
  placeSearchFieldError &&
  placeSearchSelection &&
  placeSearchResults
) {
  placeSearchInput.addEventListener("input", clearPlaceSearchFieldError);

  placeSearchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (isSearchingPlaces) {
      return;
    }

    const query = placeSearchInput.value.trim();

    if (!query) {
      placeSearchInput.setAttribute("aria-invalid", "true");
      placeSearchFieldError.textContent = "Enter a place or area in Lagos.";
      placeSearchFieldError.hidden = false;
      placeSearchInput.focus();
      return;
    }

    clearPlaceSearchFieldError();
    isSearchingPlaces = true;
    if (document.activeElement === placeSearchButton) {
      placeSearchInput.focus();
    }
    placeSearchButton.disabled = true;
    placeSearchForm.setAttribute("aria-busy", "true");
    placeSearchResults.setAttribute("aria-busy", "true");
    placeSearchStatus.dataset.state = "loading";
    placeSearchStatus.textContent = `Searching OpenStreetMap for ${query}...`;
    placeSearchError.hidden = true;
    placeSearchError.textContent = "";
    placeSearchSelection.hidden = true;
    placeSearchSelection.textContent = "";
    placeSearchResults.replaceChildren();

    try {
      const places = await searchLagosPlaces(query);

      if (places.length === 0) {
        placeSearchStatus.dataset.state = "empty";
        placeSearchStatus.textContent =
          `No places found for "${query}". Try a nearby area or another spelling.`;
        return;
      }

      placeSearchStatus.dataset.state = "success";
      placeSearchStatus.textContent =
        `Found ${places.length} ${places.length === 1 ? "place" : "places"} in Lagos. Select one to view its coordinates.`;
      placeSearchResults.append(...places.map(createPlaceResult));
    } catch (error) {
      console.error("Could not search OpenStreetMap for Lagos places.", error);
      placeSearchStatus.textContent = "";
      placeSearchStatus.dataset.state = "error";
      placeSearchError.textContent =
        "We could not complete the place search. Check your connection and try again.";
      placeSearchError.hidden = false;
    } finally {
      isSearchingPlaces = false;
      placeSearchButton.disabled = false;
      placeSearchForm.removeAttribute("aria-busy");
      placeSearchResults.setAttribute("aria-busy", "false");
    }
  });
}

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

setTimeout(() => {console.log("This message will be logged after a delay.");}, 2000);
