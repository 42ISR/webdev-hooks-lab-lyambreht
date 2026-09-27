function Checkbox({ checked, onChange, label, id }) {
  return (
    <div className="filter-chip">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id}>
        <span className="dot"></span>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;