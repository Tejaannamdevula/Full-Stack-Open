const Filter = ({ value, onChange }) => (
  <div>
    <span>filter shown with</span>
    <input
      value={value}
      onChange={onChange}
      placeholder="Search by name"
    ></input>
  </div>
);

export default Filter;
