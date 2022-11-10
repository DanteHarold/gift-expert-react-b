import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";
export const useFetchGifts = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setisLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};
