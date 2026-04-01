function Button({ label, color }) {
  return (
    <button
      className="custom-btn"
      style={{ background: color }}
    >
      {label}
    </button>
  );
}

export default Button;