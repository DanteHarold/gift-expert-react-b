import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (value <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(value);
    setInputValue("");
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar Gift"
        value={inputValue}
        onChange={onInputChange}
        //   onChange={ (event ) => onInputChange(event)}
      />
    </form>
  );
};
