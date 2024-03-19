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
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one`
        )
      ) {
        // console.log(newNumber);
        const person = persons.find((person) => person.name === newName);

        const changedDetailsPerson = { ...person, number: newNumber };

        personService
          .update(changedDetailsPerson.id, changedDetailsPerson)
          .then((updatedobj) => {
            console.log("updatedobj", updatedobj);
            setPersons(
              persons.map((person) =>
                person.id !== changedDetailsPerson.id
                  ? person
                  : changedDetailsPerson
              )
            );
          });
      }
      personService.getAll().then((newdata) => {
        setPersons(newdata);
      });
      setNewName("");
      setNewNumber("");

      return;
    }
    const personObj = {
      id: (persons.length + 1).toString(),
      name: newName,
      number: newNumber,
    };

    personService.create(personObj).then((returnedPerson) => {
      // alert(`${returnedPerson}`);

      // console.log()
      personService.getAll().then((newdata) => {
        setPersons(newdata);
      });

      setNewName("");
      setNewNumber("");
    });
  };

  const handleDelete = (name, id) => {
    if (window.confirm(`Delete ${name} `)) {
      console.log(`deleted ${name} ${id} ,${typeof id}`);
      personService
        .remove(id)
        .then((returnedObj) => {
          console.log(returnedObj);
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((err) => {
          console.log("tttt", err);
        });
    } else {
    }
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

        <Numbers
          persons={filteredPersons}
          handleDelete={handleDelete}
        ></Numbers>
      </div>
    </>
  );
}

export default App;
