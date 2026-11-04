export async function searchLagosPlaces(searchTerm) {
  const waitTime = Math.max(
    0,
    nominatimMinimumInterval - (Date.now() - lastNominatimRequestAt),
  );

  if (waitTime > 0) {
    await new Promise((resolve) => setTimeout(resolve, waitTime));
  }
}