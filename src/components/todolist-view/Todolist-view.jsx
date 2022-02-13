
import './Todolist-view.css';

const ToDoListView = (props) => {
    return (
        <>
            <div data-testid="todo-list-view" className="todo-list-items-wrapper">
                <div className="todo-list-container">
                    {
                        props?.listItems?.length > 0 ?
                            <ul data-testid="todo-list-view-ul" style={{ padding: '1rem', margin: '0rem' }}>
                                {props?.listItems.sort((a, b) => a?.time > b?.time ? -1 : 1).map(function (name, index) {
                                    return <li className="todo-list-item" key={index}>{name?.data}</li>
                                })}
                            </ul> :
                            <div className="no-to-do-item">No To-Do item found</div>
                    }
                </div>

            </div>
            <div data-testid="todo-list-view-btn" className="create-todolist-item-actions">
                <button className="btn btn-primary" onClick={() => {
                    props?.sendDataToParent(true, null)
                }}>CREATE NEW</button>
            </div>
        </>
    )
}

export default ToDoListView;