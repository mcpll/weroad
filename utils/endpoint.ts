export const travelUrl: (id?: Ref<number | undefined>) => string = (id) => {
  let url: string = "";
  id?.value === undefined
    ? (url = "http://localhost:4000/travels")
    : (url = `http://localhost:4000/travels/${id.value}`);
  console.log("url", url);
  return url;
};
