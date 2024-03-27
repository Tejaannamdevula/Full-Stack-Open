const Filter = ({ value, onChange }) => {
  return (
    <>
      find countries <input value={value} onChange={onChange}></input>
    </>
  );
};

export default Filter;
