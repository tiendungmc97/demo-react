import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Todo.propTypes = {};

const items = [
  {
    name: "Aflreds Futterkiste",
    status: "complete",
    action: {
      complete: true,
      delete: true,
    },
  },
  {
    name: "Buy more food",
    status: "new",
    action: {
      complete: true,
      delete: true,
    },
  },
  {
    name: "Make more mony",
    status: "complete",
    action: {
      complete: true,
      delete: false,
    },
  },
];

function Todo(props) {
  return (
    <div className="todo">
      <div className="todo__title">Todos</div>
      <div className="todo__add add">
        <div className="add__title">Add a task</div>
        <div className="add__content content">
          <p className="content__title">item</p>
          <input
            className="content__input-todo"
            placeholder="What do you wants to do?"
          ></input>
          <p className="content__note">Enter what you want to procastinate </p>
          <button className="content_submit btn btn--primary pointer">Submit</button>
        </div>
      </div>
      <div className="todo__task task">
        <div className="task__title">Task</div>
        <div className="task__content content">
          <table className="task__table table">
            <thead>
              <th>Items </th>
              <th>Status</th>
              <th>Action</th>
            </thead>
            <tbody>
              {items?.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.status}</td>
                    <td>
                      {item.action.complete && (
                        <button className="content__complete btn btn--primary pointer">
                          Complete
                        </button>
                      )}
                      {item.action.delete && (
                        <button className="content__delete btn btn--secondary pointer">
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Todo;
