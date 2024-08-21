export const Highlight = ({ children, color }) => (
  <span className="sketch-highlight">
    <span
      className="sketch-highlight-text"
      style={{
        backgroundColor: color,
        color: "#fff",
        padding: "0.2rem",
        borderRadius: "2px",
      }}
    >
      {children}
    </span>
  </span>
);
