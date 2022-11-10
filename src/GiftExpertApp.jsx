import { useState } from "react";
import { AddCategory,GiftGrid } from "./components/";


export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories((cat) => [...cat, newCategory]);
  };
  return (
    <>
      {/* Titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={(e) => onAddCategory(e)} />

      {/* Listado de Gift */}
      {categories.map((category) => {
        return <GiftGrid key={category} category={category} />;
      })}

      {/* Gift Item */}
    </>
  );
};
