
import React from 'react';

const Person = ({ person, handleDelete }) => {
  const confirmDelete = () => {
    const result = window.confirm(`Delete ${person.name}?`);
    if (result) {
      handleDelete(person.id);
    }
  }

  return (
    <div>
      {person.name} {person.number}
      <button onClick={confirmDelete}>Delete</button>
    </div>
  )
}

export default Person;
