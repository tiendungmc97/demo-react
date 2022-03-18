import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Todo.propTypes = {};

function Todo(props) {
  return (
    <div className="Todo">
      <div>Todos</div>
      <div className="todo__add">
        add
      </div>
      <div className="todo__task">
        task
      </div>
    </div>
  );
}

export default Todo;
