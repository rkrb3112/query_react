import './App.css';
import { useState } from 'react';
import {Task} from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () =>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) =>{
    const newTodoList = todoList.filter((task) =>{
      if(id === task.id) {
        return false;
      } else{
        return true;
      }
    });

    setTodoList(newTodoList);
  };

  const completeTask = (id) =>{
    setTodoList(todoList.map((task) => task.id === id ? {...task, completed: true} : task));
  };

  return ( 
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task, index) =>{
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask} bgColor={task.completed ? "green" : index%2 ? "white" : "gray"} />
        })}
      </div>
    </div>
  );
};



export default App;
