import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import classnames from "classnames";

Todo.propTypes = {};
const initItem = [
    {
        name: "task 1",
        status: "new",
        action: {
            new: true,
            depending: true,
            complete: true,
            edit: true,
            delete: true,
        },
    },
];

function Todo(props) {
    const [items, setItems] = useState(initItem);

    const [inputValue, setInputValue] = useState({ inputTask: "" });

    const handleSubmit = () => {
        const task = inputValue.inputTask;
        const item = [...items];
        const schema = {
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
        setInputValue({ inputTask: "" });
    };
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
        // console.log(inputValue.inputTask);
    };

    const handleDelete = (index) => {
        const item = [...items];
        item.splice(index, 1);
        setItems(item);
    };

    const handleStatus = (index, status) => {
        const item = [...items];
        item[index].status = status;
        setItems(item);
    };

    const [modalEdit, setModalEdit] = useState(false);

    const handleEdit = (index) => {
        setModalEdit(!modalEdit);
        const item = [...items];
        console.log(item[index].name);
        document.onkeyup = function (e) {
            switch (e.which) {
                case 27:
                    setModalEdit(false);
                    break;
            }
        };
    };

    const [inputValueEdit, setinputValueEdit] = useState('');

    const onChangeInputEdit = (e) => {
        setinputValueEdit(inputValueEdit);
    };

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
                        onChange={onChangeInput}
                        value={inputValue.inputTask}
                    ></input>
                   
                    <p className="content__note">
                        Enter what you want to procastinate{" "}
                    </p>
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
                    <table className="task__table table">
                        <thead>
                            <tr>
                                <th>Items </th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr
                                        key={index}
                                        className={classnames({
                                            new: item.status === "new",
                                            depending:
                                                item.status === "depending",
                                            complete:
                                                item.status === "complete",
                                        })}
                                    >
                                        <td>{item.name}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            {item.action.new && (
                                                <button
                                                    className="btn btn--primary mr-15 pointer"
                                                    onClick={() =>
                                                        handleStatus(
                                                            index,
                                                            "new"
                                                        )
                                                    }
                                                >
                                                    New
                                                </button>
                                            )}
                                            {item.action.depending && (
                                                <button
                                                    className="btn btn--primary mr-15 pointer"
                                                    onClick={() =>
                                                        handleStatus(
                                                            index,
                                                            "depending"
                                                        )
                                                    }
                                                >
                                                    depending
                                                </button>
                                            )}
                                            {item.action.complete && (
                                                <button
                                                    className="btn btn--primary mr-15 pointer"
                                                    onClick={() =>
                                                        handleStatus(
                                                            index,
                                                            "complete"
                                                        )
                                                    }
                                                >
                                                    complete
                                                </button>
                                            )}
                                            {item.action.edit && (
                                                <button
                                                    onClick={() =>
                                                        handleEdit(index)
                                                    }
                                                    className="btn btn--primary mr-15 pointer"
                                                >
                                                    edit
                                                </button>
                                            )}
                                            {item.action.delete && (
                                                <button
                                                    onClick={() =>
                                                        handleDelete(index)
                                                    }
                                                    className="btn btn--primary mr-15 pointer"
                                                >
                                                    delete
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

            {modalEdit && (
                <div className="modal" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setModalEdit(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="thong tin can sua"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        title="thong tin can sua"
                                        // name="inputEdit"
                                        value={inputValueEdit}
                                        onChange={(e) => onChangeInputEdit()}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={() => setModalEdit(false)}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Todo;
