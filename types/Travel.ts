export interface Travel {
  id: number;
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
