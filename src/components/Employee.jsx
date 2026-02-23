const Employee = ({ id, name, age, dept, salary }) => {
  return (
    <div
      style={{
        border: "1px solid white",
        borderRadius: "8px",
        marginBottom: "20px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        backgroundColor:"#FFFFFF"
      }}
    >
      <div style={{ fontWeight: "bold", fontSize:"18px" }}>Name: {name}</div>
      <div>Dept: {dept}</div>
      <hr style={{ color: "gray", background: "#e0e0e0", margin:"0px" }}></hr>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>Age: {age}</div>

        <div style={{ fontWeight: "bold", fontSize:"17px" }}>Salary: ₹{salary}</div>
      </div>
    </div>
  );
};

export default Employee;
