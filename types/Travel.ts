export interface Travel {
  id: string;
  name: string;
  date: {
    departure: string;
    return: string;
  };
  price: number;
  image: string;
  description: string;
  rating: number;
}
