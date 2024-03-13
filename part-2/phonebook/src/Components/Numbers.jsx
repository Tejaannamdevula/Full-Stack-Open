import Name from "./Name";
const Numbers = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map((person) => {
        return (
          <Name
            key={person.id}
            name={person.name}
            number={person.number}
            id={person.id}
            handleDelete={handleDelete}
          ></Name>
        );
      })}
    </div>
  );
};
export default Numbers;
