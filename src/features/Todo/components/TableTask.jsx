import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

TableTask.propTypes = {
  items: PropTypes.array.isRequired,
};

function TableTask(props) {
  const { items } = props;
  const handleStatus = (index, status) => {
    props.handleStatus(index, status);
  };
  const handleOpenEdit = (index) => {
    props.handleOpenEdit(index);
  };
  const handleDelete = (index) => {
    props.handleDelete(index);
  };
  return (
    <table className="task__table table">
      <thead>
        <tr>
          <th>Items </th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => {
          return (
            <tr
              key={index}
              className={classNames({
                new: item.status === "new",
                completed: item.status === "completed",
                depending: item.status === "depending",
                "btn-pre": true,
                disabvle: true,
              })}
            >
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>
                {item.action.new && (
                  <button
                    className="btn btn--primary mr-15 pointer"
                    onClick={() => handleStatus(index, "new")}
                  >
                    New
                  </button>
                )}
                {item.action.depending && (
                  <button
                    className="btn btn--primary mr-15 pointer"
                    onClick={() => handleStatus(index, "depending")}
                  >
                    Depending
                  </button>
                )}
                {item.action.complete && (
                  <button
                    className="btn btn--primary mr-15 pointer"
                    onClick={() => handleStatus(index, "completed")}
                  >
                    Complete
                  </button>
                )}
                {item.action.edit && (
                  <button
                    className="btn btn--primary mr-15 pointer"
                    onClick={() => handleOpenEdit(index)}
                  >
                    Edit
                  </button>
                )}
                {item.action.delete && (
                  <button
                    className="btn btn--secondary mr-15 pointer"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableTask;
