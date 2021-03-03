import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: 'February 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'February 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'February 5th at 2:30pm',
      reminder: false,
    },
  ]);
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    console.log(id);
    const newTask = {
      id: id,
      ...task,
    };
    setTasks([...tasks, newTask]);
  };
  // Delete a task
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
      ) : (
        <p>You're done for the day!</p>
      )}
    </div>
  );
}

export default App;
