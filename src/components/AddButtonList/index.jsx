import React from "react";
import List from "../List";
import Badge from "../Badge";

import "./AddButtonList.scss";

function AddButtonList({ onAdd, colors }) {
  const [visibility, setVisibility] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");

  const addList = () => {
    const color = colors.filter((x) => x.id === selectedColor)[0].name;
    if (inputValue && selectedColor)
      onAdd({
        id: Math.round(Math.random() * 1000 + 1),
        name: inputValue,
        colorId: selectedColor,
        color: color,
      });
    setVisibility(false);
    setInputValue("");
    setSelectedColor(null);
  };

  return (
    <React.Fragment>
      <div className="todo__add" onClick={() => setVisibility(true)}>
        <List
          items={[
            {
              icon: <i className="fa-solid fa-plus"></i>,
              name: "Добавить папку",
            },
          ]}
        />
      </div>

      <div className="add-list-popup" hidden={!visibility}>
        <div
          className="add-list-popup__close-btn"
          onClick={() => {
            setVisibility(false);
            setInputValue("");
            setSelectedColor(null);
          }}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </div>

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="field"
          type="text"
          placeholder="Название папки"
        />

        <div className="add-list-popup__popup-colors">
          {colors.map((color) => (
            <Badge
              onClick={() => setSelectedColor(color.id)}
              key={color.id}
              color={color.name}
              className={selectedColor === color.id && "active"}
            />
          ))}
        </div>

        <button onClick={addList} className="button">
          Добавить
        </button>
      </div>
    </React.Fragment>
  );
}

export default AddButtonList;
