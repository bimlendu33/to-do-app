import { useState } from 'react';
import './Create-todo-list.css';

const CreateTodoList = (props) => {

    const [errorOccurred, setErrorOccurred] = useState(false);
    const [maxAllowedCharMessg, setMaxAllwedCharMessg] = useState(20);
    const [toDoListItem, setToDoLisItem] = useState('');

    function createTodoListInput(value) {
        if (value?.length <= 20) {
            setErrorOccurred(false);
            setMaxAllwedCharMessg(20 - value?.length);
            setToDoLisItem(value);
        } else {
            setErrorOccurred(true);
            setMaxAllwedCharMessg(20 - value?.length);
        }
    }

    function createTodoLisItem() {
        let todoItemObject = {};
        todoItemObject.time = Date.now();
        todoItemObject.data = toDoListItem;
        props?.sendDataToParent(false, todoItemObject);
    }
    return (
        <>
            <div data-testid="create-to-do" className="create-todo-list-items-wrapper">
                <div className="create-todo-list-container">
                    <div className="create-todo-list-text-area">
                        <textarea id="create-todo-id" className={!errorOccurred ? 'form-control' : 'form-control error-form'} name="" id="" cols="30" rows="10" onChange={(e) => createTodoListInput(e?.target?.value)}></textarea>
                    </div>
                    <div className="create-todo-helptext">
                        <a className="back-button" onClick={() => props?.sendDataToParent(false, null)}>back</a>
                        <span className="text-muted">characters left: <span className="text-danger">{maxAllowedCharMessg}</span></span>
                    </div>
                    <div className="create-todolist-item-action">
                        <button className={!errorOccurred && toDoListItem?.length > 0 ? 'btn btn-primary' : 'btn btn-primary disabled'} onClick={() => createTodoLisItem()}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTodoList;