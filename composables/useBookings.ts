import { bookingUrl } from '~/utils/endpoint';
import type { Booking } from '~/types/Booking';

export default function useTravel(id?: string | undefined) {
  const bookingsList = ref<Array<Booking>>([]);
  const travelId: Ref<string | undefined> = ref(id);
  const isLoading: Ref<boolean | undefined> = ref<boolean>(false);
  const isReady: Ref<boolean | undefined> = ref<boolean>(false);

  const onFetchBooking = async () => {
    isLoading.value = true;
    const data = await fetch(bookingUrl(travelId)).then((res) => res.json());
    bookingsList.value = data as Booking[];
    isLoading.value = false;
    isReady.value = true;
  };

  const addBooking = async (booking: Booking) => {
    $fetch(`http://localhost:4000/bookings`, {
      method: 'POST',
      body: booking,
    });
  };

  onFetchBooking();

  return {
    bookingsList,
    addBooking,
    isLoading,
    isReady,
  };
}
