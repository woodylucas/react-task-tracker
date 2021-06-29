import { FaTimes } from "react-icons/fa";

function Task({ id, text, day, handleDelete }) {
  return (
    <div className="task">
      <h3>
        {text}{" "}
        <FaTimes
          onClick={() => handleDelete(id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{day}</p>
    </div>
  );
}

export default Task;
