import { useState } from 'react';
import Filter from './components/filter';
import FilteredPersons from './components/filteredPersons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)

  }  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  } 
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }
   

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
    const addNewPerson= {
      name: newName,
      number : newNumber
    }
    setPersons(persons.concat(addNewPerson))
    setNewName('')
    setNewNumber('')
    }
  }
  const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <form onSubmit={handleSubmit}>
        <h2>Add New</h2>
        
        <div>
          <label>New Name: </label>
          <input type="text" onChange={handleNameChange} value={newName} />
        </div>
        <div>
        <label>New Number: </label>
          <input type="number" onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      <FilteredPersons filteredPersons={filteredPersons}/>
      </ul>
    </div>
  )
};

export default App;
