function Button({ children, onClick, disabled = false, variant = "", type = "button", className = "" }) {
  const classes = ["btn", variant, className].filter(Boolean).join(" ");

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;