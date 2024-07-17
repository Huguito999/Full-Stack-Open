import React, { useState, useEffect } from "react";
import Filter from "./components/filter";
import FilteredPersons from "./components/filteredPersons";
import {
  getAllPersons,
  addNewPerson,
  deletePerson,
  updatePerson,
} from "./services/persons/persons.js";
import "./styles/index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getAllPersons()
      .then((initialPersons) => {
        setPersons(Array.isArray(initialPersons) ? initialPersons : []);
      })
      .catch((error) => {
        setErrorMessage("Failed to fetch persons");
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const person = persons.find((p) => p.name === newName);
    if (person) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...person, number: newNumber };
        updatePerson(person.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) => (p.id !== person.id ? p : returnedPerson))
            );
            setNewName("");
            setNewNumber("");
            setMessage(`Updated ${returnedPerson.name}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            setErrorMessage(
              error.response?.data?.error || "Error updating person"
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          });
        return;
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      addNewPerson(newPerson)
        .then((response) => {
          setPersons(persons.concat(response));
          setNewName("");
          setNewNumber("");
          setMessage(`Added ${response.name}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            setErrorMessage(error.response.data.error || "Error adding person");
          } else {
            setErrorMessage("Error adding person");
          }
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          setErrorMessage("Error deleting person");
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
    }
  };

  const filteredPersons = Array.isArray(persons)
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <div>
      <h2>Phonebook</h2>
      {message && <div className="message">{message}</div>}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <Filter filter={filter} handleFilter={handleFilter} />
      <form onSubmit={handleSubmit}>
        <h2>Add New</h2>
        <div>
          <label>New Name: </label>
          <input type="text" onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <label>New Number: </label>
          <input type="text" onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <FilteredPersons
          filteredPersons={filteredPersons}
          handleDelete={handleDelete}
        />
      </ul>
    </div>
  );
};

export default App;
