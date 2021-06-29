import React, { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Task";

const taskList = [
  {
    id: 1,
    text: "Go to the gym",
    day: "Feb 5th at 4:00am",
    reminder: false,
  },
  {
    id: 2,
    text: "Walk the dog",
    day: "Feb 5th at 10:00am",
    reminder: false,
  },
  {
    id: 3,
    text: "Attend Yoga Class",
    day: "Feb 5th at 2:30pm",
    reminder: false,
  },
  {
    id: 4,
    text: "Dancing",
    day: "Feb 8th at 4:30pm",
    reminder: false,
  },
  {
    id: 5,
    text: "Date night",
    day: "Feb 9th at 8:30pm",
    reminder: false,
  },
  {
    id: 6,
    text: "Take out the trash",
    day: "Feb 12th at 9:00pm",
    reminder: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(taskList);

  // delete task
  const deleteTask = (id) => {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  };
  return (
    <div className="container">
      <Header title="Task Tracker" color="green" />
      {tasks.map(({ id, ...otherTaskProps }) => (
        <Task key={id} id={id} {...otherTaskProps} handleDelete={deleteTask} />
      ))}
    </div>
  );
}

export default App;
