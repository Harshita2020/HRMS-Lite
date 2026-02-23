import React from "react";
import { useState, useEffect } from "react";

import Employee from "./Employee";

const EmployeesList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.log("ERROR!!!", err));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          color: "#2c2682",
        }}
      >
        HRMS Dashboard
      </h1>
      <button
        style={{
          color: "white",
          padding: "10px",
          margin: "auto 90px",
          background: "#4CAF50",
          justifyContent: "left",
          alignItems: "left",
          width: "150px",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        Add Employee
      </button>
      {/* <p>Fetching data from the backend.....</p> */}

      <div>
        {data.map((d) => (
          <div
            style={{
              maxWidth: "85%",
              margin: "40px auto",
            }}
          >
            <Employee key={d.id} {...d} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesList;
