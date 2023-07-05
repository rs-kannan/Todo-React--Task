import React, { useState } from 'react';
import CardPage from './Cards';

const ContentPage = () => {
  const [items, setItems] = useState('');
  const [desc, setDesc] = useState('');
  const [todo, setTodo] = useState([]);
  const [search, setSearch] = useState('All');

  const addtotask = () => {
    const newTodo = {
      items,
      desc,
      isEditing: false
    };
    setTodo([...todo, newTodo]);
    setItems('');
    setDesc('');
  };

  const editTask = (items, index) => {
    setTodo(
      todo.map((todo, i) =>
        i === index ? { ...todo, items, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const handleDelete = (items, desc) => {
    setTodo(todo.filter((todo) => todo.items !== items || todo.desc !== desc));
  };

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='mainpage mt-3'>
      
      <div className='inputbox col-14'>
        <input
          type='text'
          placeholder='Enter the task'
          className='first-value'
          onChange={(e) => setItems(e.target.value)}
          value={items}
        />
        <input
          type='text'
          placeholder='Description'
          className='description'
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button className='btn btn-success' onClick={addtotask}>
          Add Task
        </button>
      </div>

      <div className='row p-5'>
        <div className='col-6 text-start'>
          <h3 className='mb-5'>MyToDoList</h3>
        </div>
        <div className='col-6 text-end'>
          <p>
            Status :
            <select value={search} onChange={handleFilter}>
              <option value='All'>All</option>
              <option value='Completed'>Completed</option>
              <option value='Pending'>Pending</option>
            </select>
          </p>
        </div>
      </div>

      <div className='container px-5 row'>
        {todo
          .filter((todos) => search === 'All' || todos.status === search)
          .map((todos, index) => (
            <CardPage
              key={index}
              index={index}
              name={todos.items}
              description={todos.desc}
              onEdit={editTask}
              onDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default ContentPage;