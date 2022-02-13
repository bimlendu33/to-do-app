
import './App.css';
import Sidebar from './components/sidebar/SideBar';
import ToDoListView from './components/todolist-view/Todolist-view';
import { useState } from 'react';
import CreateTodoList from './components/create-todo-list/Create-todo-list';

function App() {
  const [editMode, setEditMode] = useState(false);
  /*  const [toDoListItems, setToDoListItems] = useState([
     { "time": 1644656697688, "data": "To Do List Item 1" },
     { "time": 1644656697687, "data": "To Do List Item 2" },
     { "time": 1644656697685, "data": "To Do List Item 3" }
   ]) */

  const [toDoListItems, setToDoListItems] = useState([

  ])

  const sendDataToParent = (editMode, toDoItem) => { // the callback. Use a better name
    if (toDoItem) {
      setToDoListItems(toDoListItems.concat(toDoItem))
    }
    setEditMode(editMode);
  };

  return (
    <div className="App">
      <div className="tolist-container">
        <div className="row">
          <div className="col-md-4 side-bar-wrapper">
            <Sidebar />
          </div>
          <div className="col-md-8 todo-list-wrapper">
            <div className="todo-list-wrapper-sidebar">
              <Sidebar />
            </div>
            {
              !editMode ? <ToDoListView listItems={toDoListItems} sendDataToParent={sendDataToParent} /> : <CreateTodoList sendDataToParent={sendDataToParent} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
