import { type Travel } from "~/types/Travel";
import { travelUrl } from "~/utils/endpoint";

export default function useTravel() {
  const travelsList = ref<Array<Travel>>([]);

  const onFetchTravel = async () => {
    const {
      data: { value: fetchTravels },
    } = await useFetch(travelUrl);

    travelsList.value = fetchTravels as Travel[];
  };

  const deleteTravel = async (id: number) => {
    await $fetch(`http://localhost:4000/travels/${id}`, {
      method: "DELETE",
    });
    const newTravels = await $fetch(travelUrl);
    travelsList.value = newTravels as Travel[];
  };

  onFetchTravel();

  return {
    travelsList,
    deleteTravel,
  };
}
