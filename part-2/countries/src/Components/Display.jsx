const Display = ({ countries }) => {
  length = countries.length;
  if (length >= 10) {
    return (
      <>
        <p>Too many matches,specify another filter</p>
        <h1>{length}</h1>
      </>
    );
  }
};
export default Display;
