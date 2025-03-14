function ScholarshipForm({ onClick = "Submit" }) {
  return (
    <div className="form-container">
      <h2>Pagpapatunay for Scholarship</h2>
      <label>Name of Parent: <input type="text" /></label>
      <label>Age: <input type="number" /></label>
      <label>Trabaho: <input type="text" /></label>
      <label>Kita kada Buwan: <input type="text" /></label>
      <button className="submit-button" onClick={onClick}>
           Submit
           </button>
    </div>
  );
}

export default ScholarshipForm;

