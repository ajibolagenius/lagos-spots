// src/main.ts

// 1. Define the Spot data structure
interface Spot {
  id: string;
  name: string;
  category: 'food' | 'study' | 'nightlife' | 'events';
  area: string;
  description: string;
  imageUrl: string;
}

// 2. Define the source dataset
const spots: Spot[] = [
  {
    id: 'terra-kulture',
    name: 'Terra Kulture',
    category: 'food',
    area: 'Victoria Island',
    description: 'Art gallery, authentic Nigerian restaurant, and live theatre performance hall.',
    imageUrl: '/assets/terra-kulture.jpg',
  },
  {
    id: 'bogobiri',
    name: 'Bogobiri House',
    category: 'events',
    area: 'Ikoyi',
    description: 'Boutique hotel, African art gallery, open-mic poetry, and live Afrobeat music hub.',
    imageUrl: '/assets/bogobiri.jpg',
  },
  {
    id: 'workstation',
    name: 'Workstation Bar Beach',
    category: 'study',
    area: 'Victoria Island',
    description: 'High-speed internet co-working hub with uninterrupted power and coffee bar.',
    imageUrl: '/assets/workstation.jpg',
  },
  {
    id: 'hard-rock',
    name: 'Hard Rock Cafe',
    category: 'nightlife',
    area: 'Oniru',
    description: 'Beachfront American diner with rock memorabilia, live DJ sets, and cocktail lounge.',
    imageUrl: '/assets/hardrock.jpg',
  },
];

// 3. Pure filtering function
function getVisibleSpots(allSpots: Spot[], selectedCategory: string): Spot[] {
  if (selectedCategory === 'all') {
    return allSpots;
  }
  return allSpots.filter((spot) => spot.category === selectedCategory);
}

// 4. DOM Rendering function
function renderSpots(spotsToRender: Spot[]): void {
  const container = document.getElementById('spots-list');
  if (!container) return;

  if (spotsToRender.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500">
        <p class="text-lg font-medium">No spots found in this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = spotsToRender
    .map(
      (spot) => `
      <article class="flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-all" id="${spot.id}">
        <div class="flex justify-between items-start gap-2 mb-3">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">${spot.name}</h3>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 capitalize">
            ${spot.category}
          </span>
        </div>
        <p class="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">📍 ${spot.area}</p>
        <p class="text-sm text-slate-600 dark:text-slate-300 flex-grow mb-4">${spot.description}</p>
        <button class="w-full py-2 px-4 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors">
          View Details
        </button>
      </article>
    `
    )
    .join('');
}

// Initial page render
renderSpots(spots);
