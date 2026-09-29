function Input({ value, onChange, placeholder = "", type = "text", className = "" }) {
  const classes = ["input", className].filter(Boolean).join(" ");

  return (
    <input
      className={classes}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;