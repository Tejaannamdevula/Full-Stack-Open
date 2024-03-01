import { useState } from "react";
import Name from "./Components/Name";

function App() {
  const [persons, setPersons] = useState([{ id: 1, name: "Teja" }]);
  const [newName, setNewName] = useState("");
  // const hadleChange = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  // };

  const addName = (event) => {
    event.preventDefault();
    const personObj = { id: persons.length + 1, name: newName };
    setPersons(persons.concat(personObj));
    setNewName("");
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
            <button type="submit" onClick={addName}>
              add
            </button>
          </div>
          <div>debug:{newName}</div>
        </form>
        <h2>Numbers</h2>
        <div>
          {persons.map((person) => {
            return <Name key={person.id} name={person.name}></Name>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
