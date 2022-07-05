import { render, screen } from '@testing-library/react';
import App from './App';
import ToDoList from './components/ToDoList'

describe('First test', () => { 
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/To Do List/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Será validado se o componente `<ToDoList />` é renderizado', () => {
    render(<ToDoList />);
  });

})

