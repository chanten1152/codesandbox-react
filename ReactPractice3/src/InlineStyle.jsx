export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 1px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alighItems: "center"
  };
  const titltStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    paddin: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titltStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!</button>
    </div>
  );
};
