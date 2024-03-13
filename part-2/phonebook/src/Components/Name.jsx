const Name = (props) => {
  return (
    <li>
      {props.name} {props.number}
      <button onClick={() => props.handleDelete(props.name, props.id)}>
        delete
      </button>
    </li>
  );
};

export default Name;
