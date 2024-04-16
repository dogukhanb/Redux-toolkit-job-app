
const Select = ({ label, options, handleChange, name, defaultValue }) => {
  return (
    <div>
      <label>{label}</label>
      <select defaultValue={defaultValue} onChange={handleChange} name={name}>
        <option hidden value="">
          Seçiniz
        </option>
        {options.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
