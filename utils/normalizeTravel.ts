import type { TravelData } from '~/types/TravelData';
import type { Travel } from '~/types/Travel';
import { v4 as uuid } from 'uuid';

export default function normalizeTravel(travelData: TravelData): Travel {
  console.log('normalizeTravel', travelData);
  return {
    id: uuid(),
    name: travelData.name,
    image: travelData.image,
    date: travelData.date,
    price: +travelData.price,
    rating: travelData.rating,
    description: travelData.description,
  };
}
