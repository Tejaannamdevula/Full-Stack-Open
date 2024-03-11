import { useState } from "react";
import Name from "./Components/Name";

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Teja", number: 9912916634 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  // const hadleChange = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  // };

  const addName = (event) => {
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
        <form>
          <div>
            name:
            <input
              placeholder="name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              // onChange={hadleChange}
            ></input>
          </div>
          <div>
            name:
            <input
              // type="number"
              placeholder="number"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
              // onChange={hadleChange}
            ></input>
          </div>

          <div>
            <button type="submit" onClick={addName}>
              add
            </button>
          </div>
          <div>debug:{newName}</div>
        </form>
        <h2>Numbers</h2>
        <div>
          {persons.map((person) => {
            return (
              <Name
                key={person.id}
                name={person.name}
                number={person.number}
              ></Name>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
