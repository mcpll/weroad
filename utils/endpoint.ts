export const travelUrl: (id?: Ref<string | undefined>) => string = (id) => {
  let url: string;
  id?.value === undefined
    ? (url = 'http://localhost:4000/travels')
    : (url = `http://localhost:4000/travels/${id.value}`);
  return url;
};

export const bookingUrl: (id?: Ref<string | undefined>) => string = (id) => {
  let url: string;
  id?.value === undefined
    ? (url = 'http://localhost:4000/bookings')
    : (url = `http://localhost:4000/bookings/${id.value}`);
  return url;
};
