import { type Travel } from "~/types/Travel";
import { travelUrl } from "~/utils/endpoint";

export default function useTravel(id?: number | undefined) {
  const travelsList = ref<Array<Travel>>([]);
  const travelId = ref(id);
  const onFetchTravel = async () => {
    const {
      data: { value: fetchTravels },
    } = await useFetch(travelUrl(travelId));

    travelsList.value = fetchTravels as Travel[];
  };

  const deleteTravel = async (travel: Travel) => {
    const id: number = +travel.id;
    await $fetch(`http://localhost:4000/travels/${id}`, {
      method: "DELETE",
    });
    const newTravels = await $fetch(travelUrl());
    travelsList.value = newTravels as Travel[];
  };

  const editTravel = async (id: number, travel: Travel) => {
    $fetch(`http://localhost:4000/travels/${id}`, {
      method: "PATCH",
      body: travel,
    });
    const newTravels = await $fetch(travelUrl());
    travelsList.value = newTravels as Travel[];
  };

  const addTravel = async (travel: Travel) => {
    $fetch(`http://localhost:4000/travels`, {
      method: "POST",
      body: travel,
    });
  };

  onFetchTravel();

  return {
    travelsList,
    editTravel,
    addTravel,
    deleteTravel,
  };
}
