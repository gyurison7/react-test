import './App.css';
import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);

  const [content, setContent] = useState('');

  const contentChangehandelr = (event) => {
    setContent(event.target.value);
  }

  const addButtonHandler = () => {
    const newTodoList = {
      id: todoList.length + 1,
      content
    };
    setTodoList([...todoList, newTodoList]);
    setContent('');
  }

  return (
    <div>
      <div className='input-container'>
        <input type='text' value={content} onChange={contentChangehandelr} />
        <button onClick={addButtonHandler}>추가하기</button>
      </div>
      <div className='list-container'>
        <h2>Todo List</h2>
        <div className='list-wrapper'>
          {
            todoList.map((value) => (
              <div className='todo-container' key={value.id}>
                <div>{value.content}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
