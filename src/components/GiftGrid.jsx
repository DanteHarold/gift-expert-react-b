import { useState, useEffect } from "react";
//import { getGifts } from "../helpers/getGifts";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiftItem } from "./GiftItem";

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts(category);
  console.log({ images, isLoading });
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando</h2>}
      <div className="card-grid">
        {images.map((img) => {
          return <GiftItem key={img.img} {...img} />;
        })}
      </div>
    </>
  );
};
