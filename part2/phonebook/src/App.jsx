import { useState } from 'react';

const Person = ({ person }) => {
  return <li>{person.name}</li>
};

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
    const addNewName = {
      name: newName
    }
    setPersons(persons.concat(addNewName))
    setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ul>
        {persons.map((person, index) => (
          <Person key={index} person={person} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={handleChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
};

export default App;
