import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import ToDoListView from '../components/todolist-view/Todolist-view';

it('should render todo list item', () => {
    const data = [
        { "time": 1644656697688, "data": "To Do List Item 1" },
        { "time": 1644656697687, "data": "To Do List Item 2" },
        { "time": 1644656697685, "data": "To Do List Item 3" }
    ];
    render(<ToDoListView listItems={data} />);
    const todoElement = screen.getByTestId('todo-list-view');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('To Do List Item 1')
});

it('should render todo list no-item-found', () => {
    const data = [

    ];
    render(<ToDoListView listItems={data} />);
    const todoElement = screen.getByTestId('todo-list-view');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('No To-Do item found')
});

it('should render todo list ul', () => {
    const data = [
        { "time": 1644656697688, "data": "To Do List Item 1" },
        { "time": 1644656697687, "data": "To Do List Item 2" },
        { "time": 1644656697685, "data": "To Do List Item 3" }
    ];
    render(<ToDoListView listItems={data} />);
    const todoElement = screen.getByTestId('todo-list-view-ul');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toContainHTML("<ul style={{ padding: '1rem', margin: '0rem' }}")
});


it('should render todo list button', () => {

    const sendDataToParent = (editMode, toDoItem) => {
        if (toDoItem) {
            setToDoListItems(toDoListItems.concat(toDoItem))
        }
        setEditMode(editMode);
    };
    render(<ToDoListView sendDataToParent={sendDataToParent} />);
    const todoElement = screen.getByTestId('todo-list-view-btn');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("CREATE NEW")
});

