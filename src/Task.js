export const Task = ({taskName, id, deleteTask, completeTask, bgColor}) =>{
    return (
        <div className="task" style={{backgroundColor: bgColor}}>
          <h1>{taskName}</h1>
          <button onClick={() => completeTask(id)}>Complete</button>
          <button onClick={() => deleteTask(id)}>X</button>
        </div>
        )
};