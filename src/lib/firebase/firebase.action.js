import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { firebaseStorage } from "../config/firebase.config";
import { generateToast } from "../functions";

export const deleteImage = async (image, bucket, toast) => {
  const imageRef = ref(firebaseStorage, `${bucket}/${image}`);
  try {
    await deleteObject(imageRef);
    return toast({
      title: "Success",
      description: "Image Deleted",
    });
  } catch (error) {
    const errors = generateToast(error);
    return errors.forEach((err) => {
      toast({
        title: err.title,
        description: err.description,
      });
    });
  }
};

export const insertImage = async (image, bucket, toast) => {
  try {
    if (image && image !== "" && image !== null) {
      const imageRef = ref(
        firebaseStorage,
        `${import.meta.env.VITE_FIREBASE_BUCKET}/${bucket}/${
          image.name + Date.now()
        }`
      );
      const data = await uploadBytes(imageRef, image);
      const image_url = await getDownloadURL(data.ref);
      toast({
        title: "Success",
        description: "Image Inserted",
      });
      return { image_url, image_name: data.metadata.name };
    } else {
      throw new Error("Error");
    }
  } catch (error) {
    const errors = generateToast(error);
    return errors.forEach((err) => {
      toast({
        title: err.title,
        description: err.description,
      });
    });
  }
};
