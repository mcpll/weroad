import { type Travel } from '~/types/Travel';
import { travelUrl } from '~/utils/endpoint';

export default function useTravel(id?: string | undefined) {
  const list: Ref<Travel[]> = ref<Array<Travel>>([]);
  const travelId: Ref<string | undefined> = ref(id);
  const isLoading: Ref<boolean> = ref<boolean>(false);
  const isReady: Ref<boolean> = ref<boolean>(false);
  const filter: Ref<string> = ref('');

  const travelsList = computed(() => {
    if (filter.value == '') return list.value;
    return list.value.filter((travel: Travel) => travel.name === filter.value);
  });

  const onFetchTravel = async () => {
    isLoading.value = true;
    const data = await $fetch(travelUrl(travelId));
    isReady.value = true;
    list.value = data as Travel[];
    isLoading.value = false;
  };

  const deleteTravel = async (travel: Travel) => {
    const id: string = travel.id;
    await $fetch(`http://localhost:4000/travels/${id}`, {
      method: 'DELETE',
    });
    const newTravels = await $fetch(travelUrl());
    list.value = newTravels as Travel[];
  };

  const editTravel = async (id: string, travel: Travel) => {
    await $fetch(`http://localhost:4000/travels/${id}`, {
      method: 'PATCH',
      body: travel,
    });
    const newTravels = await $fetch(travelUrl());
    list.value = newTravels as Travel[];
  };

  const addTravel = async (travel: Travel) => {
    await $fetch(`http://localhost:4000/travels`, {
      method: 'POST',
      body: travel,
    });
  };

  const searchTravel = async (data: string) => {
    return await $fetch(`http://localhost:4000/travels?q=${data}`);
  };

  const setFilter = (value: string): void => {
    filter.value = value;
  };

  onFetchTravel();

  return {
    searchTravel,
    setFilter,
    editTravel,
    addTravel,
    deleteTravel,
    travelsList,
    isLoading,
    isReady,
  };
}
