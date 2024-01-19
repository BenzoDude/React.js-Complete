import { useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
  };
  return (
    <div className="container mt-5">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-5">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Tode here"
          />
        </div>
        <div className="col-5">
          <input
            type="date"
            ref={dueDateElement}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
          >
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;