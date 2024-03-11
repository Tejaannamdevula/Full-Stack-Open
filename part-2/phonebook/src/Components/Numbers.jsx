import Name from "./Name";
const Numbers = ({ persons }) => {
  return (
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
  );
};
export default Numbers;
