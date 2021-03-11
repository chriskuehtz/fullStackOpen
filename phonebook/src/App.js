import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const addPerson = (x) => {
    setPersons(persons.concat(x));
  };

  return (
    <div>
      <h2>Phonebook:</h2>
      <Form persons={persons} addPerson={addPerson} />
      <h2>Search:</h2>
      <Search search={search} handleSearch={handleSearch} />
      <h2>Numbers:</h2>
      <List
        persons={persons.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )}
      />
    </div>
  );
};

const Form = ({ persons, addPerson }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleName = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };
  const handleNumber = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  };

  const handlePerson = (event) => {
    event.preventDefault();

    const nameObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.map((p) => p.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      addPerson(nameObject);
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <form onSubmit={handlePerson}>
      <div>
        name: <input value={newName} onChange={(e) => handleName(e)} />
      </div>
      <div>
        number: <input value={newNumber} onChange={(e) => handleNumber(e)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Search = ({ search, handleSearch }) => {
  return <input value={search} onChange={(e) => handleSearch(e)} />;
};

const List = ({ persons }) => {
  return (
    <ul>
      {persons.map((p) => (
        <li key={p.name}>
          {p.name}: {p.number}
        </li>
      ))}
    </ul>
  );
};

export default App;
