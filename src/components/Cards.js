import React, { useState } from 'react';

const CardPage = ({ index, name, description, onEdit, onDelete }) => {
  const [editedName, setEditedName] = useState(name);
  const [editedDesc, setEditedDesc] = useState(description);
  const [search, setSearch] = useState('ALL')

  const handleEdit = () => {
    const newName = prompt('Enter new name:', editedName);
    const newDesc = prompt('Enter new description:', editedDesc);
    if (newName && newDesc) {
      setEditedName(newName);
      setEditedDesc(newDesc);
      onEdit(index, newName, newDesc);
    }
  };

  const handleDelete = ()=>{
      onDelete(name, description);
  }

  const searchFilter = (e) => {
    setSearch(e.target.value)
  }
  

  return (
    <div className=' card col-3 p-4 m-3'>
      <p className='fw-bold'>Name: {editedName}</p>
      <p className='fw-bold'>Description: {editedDesc}</p>
      <p>
        Status:
        <select value={search} onChange={searchFilter}>
          <option onClickFilter={searchFilter} value='Pending'>Pending</option>
          <option value='Completed'>Completed</option>
        </select>
      </p>
      <div className='row'>
      <div className='col-2 mx-3 text-start'>
      <button className='btn mx-2 btn-success' onClick={handleEdit}>
        Edit
      </button></div>
      <div className='col-2 mx-3 text-end'>
      <button className='btn btn-danger mx-2' onClick={handleDelete}>Delete</button>
      </div>
      </div>
    </div>
  );
};

export default CardPage;