import React from "react";
import List from "./components/List";
import AddButtonList from "./components/AddButtonList";
import Tasks from "./components/Tasks";

import db from "./assets/db.json";

function App() {
  const [lists, setList] = React.useState(
    db.lists.map((item) => {
      item.color = db.colors
        .filter((color) => item.colorId === color.id)
        .map((x) => x.name);
      return item;
    })
  );

  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setList(newList);
  };

  const onRemoveItem = (obj) => {
    const newList = lists.filter((item) => item.id !== obj.id);
    setList(newList);
  };

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          items={[
            {
              icon: <i className="fa-solid fa-list"></i>,
              name: "Все задачи",
              active: true,
            },
          ]}
          isRemovable={false}
        />
        <List items={lists} isRemovable={true} onRemove={onRemoveItem} />
        <AddButtonList onAdd={onAddList} colors={db.colors} />
      </div>
      <div className="todo__tasks">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
