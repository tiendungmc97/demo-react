

index.isx

import classnames from "classnames";
import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import TableTask from "./components/TableTask";
import "./style.scss";

Todo.propTypes = {};

const inititems = [
  {
    name: "Aflreds Futterkiste",
    status: "new",
    action: {
      new: false,
      depending: true,
      complete: true,
      edit: true,
      delete: true,
    },
  },
];

function Todo(props) {
  const [valueInput, setValueInput] = useState({
    inputTask: "",
    inputEdit: "",
    indexEdit: 0,
  });
  const [items, setItems] = useState(inititems);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    let task = valueInput.inputTask;
    let item = [...items];
    let schema = {
      name: task,
      status: "new",
      action: {
        new: true,
        depending: true,
        complete: true,
        edit: true,
        delete: true,
      },
    };
    item.push(schema);
    setItems(item);
  };

  const handleStatus = (index, status) => {
    let item = [...items];
    item[index].status = status;
    setItems(item);
  };
  const handleDelete = (index) => {
    let item = [...items];
    item.splice(index, 1);
    setItems(item);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenEdit = (index) => {
    setValueInput({
      ...valueInput,
      inputEdit: items[index].name,
      indexEdit: index,
    });
    setIsOpen(!isOpen);
  };
  
  const handleSaveEdit = () => {
    let item= [...items];
    let index = valueInput.indexEdit;
    item[index].name = valueInput.inputEdit;
    setItems(item);
    setIsOpen(!isOpen);
  }
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
            name="inputTask"
            value={valueInput.inputTask}
            onChange={handleInput}
          ></input>
          <p className="content__note">Enter what you want to procastinate </p>
          <button
            className="content_submit btn btn--primary pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="todo__task task">
        <div className="task__title">Task</div>
        <div className="task__content content">
          <TableTask
            items={items}
            handleStatus={handleStatus}
            handleOpenEdit={handleOpenEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Sửa</ModalHeader>
          <ModalBody>
            <Input
              placeholder="What do you wants to edit?"
              name="inputEdit"
              value={valueInput.inputEdit}
              onChange={handleInput}
            ></Input>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSaveEdit}>
              Lưu
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Hủy
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default Todo;




TableTask.jsx

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

















