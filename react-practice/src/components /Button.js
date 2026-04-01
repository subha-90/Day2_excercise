function Button({ label, color }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 16px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

export default Button;