import React from "react";
import classNames from "classnames";
import Badge from "../Badge";

import "./List.scss";

function List({ items, isRemovable, onRemove }) {
  return (
    <ul className="todo__list">
      {items.map((obj, index) => (
        <li key={index} className={classNames({ active: obj.active })}>
          {obj.icon ? obj.icon : <Badge color={obj.color} />}
          <span>{obj.name}</span>
          {isRemovable && (
            <i
              onClick={() => onRemove(obj)}
              className="fa-solid fa-xmark remove-btn"
            ></i>
          )}
        </li>
      ))}
    </ul>
  );
}

export default List;
