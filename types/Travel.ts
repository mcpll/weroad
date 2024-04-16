export interface Travel {
  id: string;
  name: string;
  date: {
    departure: string;
    return: string;
  };
  price: number;
  travelImage: Array<object>;
  image: string;
  description: string;
  rating: number;
}
