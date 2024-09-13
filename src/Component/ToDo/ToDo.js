import React, { useState } from "react";
import "./todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function ToDo() {
  // tasks state

  const [toDo, setToDo] = useState([]);

  // temp state

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // add task

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };
  // delete task

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };
  // mask as done task

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };
  // cancel update

  const cancelUpdate = () => {
    setUpdateData("");
  };
  // change tak for update

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // update task

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="container">
      <h2>ToDo App</h2>

      {/* update task */}

      {updateData && updateTask ? (
        <>
          <div className="row">
            <div className="col">
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button
                onClick={updateTask}
                className="btn btn-lg btn-success mx-4"
              >
                Update
              </button>
              <button onClick={cancelUpdate} className="btn btn-lg btn-warning">Cancel</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col">
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button onClick={addTask} className="btn btn-lg btn-success">
                Add Task
              </button>
            </div>
          </div>
        </>
      )}

      {toDo && toDo.length ? "" : "No Tasks.."}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskbg">
                  <div className={task.status ? "done" : ""}>
                    <div>
                      <span className="tasknum">{index + 1}</span>
                      <span className="taskTitle">{task.title}</span>
                    </div>
                  </div>
                  <div className="iconWrap">
                    <span
                      onClick={(e) => markDone(task.id)}
                      title="Completed / Not Completed"
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>

                    {task.status ? null : (
                      <span
                        onClick={() =>
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                        title="Edit"
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}

                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default ToDo;
