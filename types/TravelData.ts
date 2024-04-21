export interface TravelData {
  date: {
    departure: string;
    return: string;
  };
  description: string;
  name: string;
  price: string;
  rating: number;
  travelImage: { file: string; name: string }[];
  image: string;
}
