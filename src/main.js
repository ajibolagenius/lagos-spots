import { searchLagosPlaces } from './api.js';

searchLagosPlaces("Lekki").then(data => console.log(data));

async function isSpot(spot) {
    const res = await searchLagosPlaces("Lekki");
}