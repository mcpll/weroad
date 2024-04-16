import { type Travel } from "~/types/Travel";
import { travelUrl } from "~/utils/endpoint";

export default function useTravel(id?: string | undefined) {
  const travelsList = ref<Array<Travel>>([]);
  const travelId = ref(id);
  const isLoading: Ref<boolean> = ref(false);
  const isReady: Ref<boolean> = ref(false);
  const onFetchTravel = async () => {
    isLoading.value = true;
    const data = await fetch(travelUrl(travelId)).then((res) => res.json());
    travelsList.value = data as Travel[];
    isLoading.value = false;
    isReady.value = true;
  };

  fetch(travelUrl(travelId))
    .then((res) => res.json())
    .then((json) => {
      travelsList.value = json as Travel[];
    });

  const deleteTravel = async (travel: Travel) => {
    const id: string = travel.id;
    await $fetch(`http://localhost:4000/travels/${id}`, {
      method: "DELETE",
    });
    const newTravels = await $fetch(travelUrl());
    travelsList.value = newTravels as Travel[];
  };

  const editTravel = async (id: string, travel: Travel) => {
    await $fetch(`http://localhost:4000/travels/${id}`, {
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
    isLoading,
    isReady,
  };
}
