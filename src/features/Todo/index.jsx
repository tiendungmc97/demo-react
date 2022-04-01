import "./style.scss";
import React, { useState } from "react";
import classnames from "classnames";
import Edit from "./components/TableTask";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "reactstrap";

function Todo() {
    document.onkeyup = function (e) {
        switch (e.which) {
            case 13:
                handleSubmit();
                break;
        }
    };

    const initItems = [
        {
            name: "tuancandongsang",
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

    const [items, setItems] = useState(initItems);

    const [valueInput, setItemInput] = useState("");

    // console.log(valueInput)

    const handleInput = (e) => {
        setItemInput(e.target.value);
    };

    const handleStatus = (index, status) => {
        const item = [...items];
        item[index].status = status;
        setItems(item);
    };

    const handleSubmit = () => {
        const schema = {
            name: valueInput,
            status: "new",
            action: {
                new: true,
                depending: true,
                complete: true,
                edit: true,
                delete: true,
            },
        };
        items.push(schema);
        setItems(items);
        setItemInput("");
    };

    const handleDelete = (index) => {
        const item = [...items];
        item.splice(index, 1);
        setItems(item);
    };

    var EditTodo = document.querySelector(".modal1");
    const handleEdit = (index) => {
        setItemInput({
            ...valueInput,
            inputEdit: items[index].name,
            indexEdit: index,
          });
          valueInput.inputEdit = items[index].name;


        EditTodo.classList.add("display");
        EditTodo.onkeyup = function (e) {
            switch (e.which) {
                case 13:
                    handleSaveChange();
                    edit__close();
                    break;
                case 27:
                    EditTodo.classList.remove("display");
                    break;
            }
        };
    };

    const handleSaveChange = () => {
        const item = [...items];
        const schema = {
            name: valueInput.inputEdit,
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
        // setItemInput("");
    };

    const edit__close = () => {
        EditTodo.classList.remove("display");
    };

    return (
        <div className="todo">
            <div className="todo__title">Todos </div>
            <div className="todo__add add">
                <div className="add__title">Add a task</div>
                <div className="add__content content">
                    <p className="content__title">item</p>
                    <input
                        className="content__input-todo"
                        placeholder="What do you wants to do?"
                        value={valueInput}
                        onChange={handleInput}
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
                    <table className="table table-striped">
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
                                            depending: item.status === "depending",
                                            complete: item.status === "complete",
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
                                                    Depending
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
                                                    Complete
                                                </button>
                                            )}
                                            {item.action.edit && (
                                                <button
                                                    className="btn btn--primary mr-15 pointer"
                                                    onClick={() =>
                                                        handleEdit(index)
                                                    }
                                                >
                                                    Edit
                                                </button>
                                            )}
                                            {item.action.delete && (
                                                <button
                                                    className="btn btn--secondary mr-15 pointer"
                                                    onClick={() =>
                                                        handleDelete(index)
                                                    }
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
                </div>
            </div>

            <div className="modal1" tabindex="-1">
                <div className="modal1__overlay" onClick={edit__close}>
                    {" "}
                </div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Ban co muon Edit</h5>
                            <button
                                onClick={edit__close}
                                type="button"
                                className="btn-close edit__close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="inputEdit"
                                    value={valueInput.inputEdit}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={edit__close}
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleSaveChange}
                                type="button"
                                className="btn btn-primary"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;
