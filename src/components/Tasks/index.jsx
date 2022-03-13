import React from "react";

import "./Task.scss";

function Tasks() {
  return (
    <div className="tasks">
      <h2 className="tasks__title">
        Tasks
        <i className="fa-solid fa-pen"></i>
      </h2>
      <div className="tasks__items">
        <div className="tasks__items__row">
          <div className="checkbox">
            <input id="check" type="checkbox" />
            <label htmlFor="check">
              <div className="fa-solid fa-check"></div>
            </label>
          </div>
          <p>Text of the task</p>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
