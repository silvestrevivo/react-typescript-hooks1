import React, { useState } from 'react';

interface Props {
  title: string
}

interface ITodo {
  text: string,
  complete: boolean
}

type FormElement = React.FormEvent<HTMLFormElement>;

function App({ title }: Props): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }]
    setTodos(newTodos);
  }

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number): JSX.Element => {
          return (
            <React.Fragment key={todo.text}>
              <div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>{todo.text}</div>
              <button type="button" onClick={(): void => completeTodo(index)}>
                {todo.complete ? 'Incomplete' : 'Complete'}
              </button>
              <button type="button" onClick={(): void => removeTodo(index)}>
                Remove
              </button>
            </React.Fragment>
          )
        })}
      </section>
    </div>
  );
}

export default App;
