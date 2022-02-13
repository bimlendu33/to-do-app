import { render, screen, cleanup } from '@testing-library/react';
import CreateTodoList from '../components/create-todo-list/Create-todo-list';

it('should render CREATETODOCOMPONENT chars left help', () => {
    render(<CreateTodoList />);
    const todoElement = screen.getByTestId('create-to-do');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('characters left:')

});