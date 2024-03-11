import { useState } from "react";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Numbers from "./Components/Numbers";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");

      return;
    }
    const personObj = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(personObj));
    setNewName("");
    setNewNumber("");
  };

  return (
    <>
      <div>
        <h2> phonebook</h2>

        <Filter
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        ></Filter>
        <h2>add a new</h2>

        <PersonForm
          newName={newName}
          newNumber={newNumber}
          handleNameChange={(e) => {
            setNewName(e.target.value);
          }}
          handleNumberChange={(e) => {
            setNewNumber(e.target.value);
          }}
          onSubmit={handleSubmit}
        ></PersonForm>

        <h2>Numbers</h2>

        <Numbers persons={filteredPersons}></Numbers>
      </div>
    </>
  );
}

export default App;
