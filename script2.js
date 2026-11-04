const searchInput = document.querySelector("#search-input");
const statusMessage = document.querySelector("#status-message");
const resultsContainer = document.querySelector("#results-container");

searchInput.addEventListener("change", async (e) => {
  const query = e.target.value.trim();
  if (!query) return;

  // 1. Show Loading State:
  statusMessage.textContent = "⏳ Searching places in Lagos...";
  resultsContainer.innerHTML = "";

  try {
    const results = await searchLagosPlaces(query);

    // 2. Handle Empty State:
    if (results.length === 0) {
      statusMessage.textContent = `❌ No places found matching "${query}". Try another area.`;
      return;
    }

    // 3. Handle Success State:
    statusMessage.textContent = `Found ${results.length} locations:`;
    
    results.forEach(place => {
      const card = document.createElement("article");
      card.className = "p-3 bg-white rounded shadow border mb-2";
      card.innerHTML = `
        <h4 class="font-bold text-slate-800">${place.name || query}</h4>
        <p class="text-xs text-slate-500">${place.display_name}</p>
        <span class="text-xs text-orange-600 font-semibold">Coordinates: ${place.lat}, ${place.lon}</span>
      `;
      resultsContainer.append(card);
    });

  } catch (error) {
    // 4. Handle Error State:
    statusMessage.textContent = "⚠️ Unable to connect to map services. Please check your internet connection.";
  }
});
