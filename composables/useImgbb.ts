export default function useImgbb() {
  async function uploadImage(imageFile: object) {
    console.log("imageFile:", imageFile);
    try {
      const res: object = await $fetch(
        "https://api.imgbb.com/1/upload?key=65974e604e0d2a8c9b68d4747fd2c7fa",
        {
          method: "POST",
          body: imageFile,
        },
      );
      console.log("res:", res);
      // @ts-ignore
      return res.data.url;
    } catch (e) {
      console.log("error", e);
    }
  }

  return {
    uploadImage,
  };
}
