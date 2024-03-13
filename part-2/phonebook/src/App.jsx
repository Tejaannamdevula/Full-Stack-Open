import { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Numbers from "./Components/Numbers";
import axios from "axios";
import personService from "./Services/persons";

function App() {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // axios.get("http://localhost:3001/persons").then((response) => {
    //   setPersons(response.data);
    // });

    personService.getAll().then((initialState) => {
      setPersons(initialState);
    });
  }, []);

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

    personService.create(personObj).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
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
