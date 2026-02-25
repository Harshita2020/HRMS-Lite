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

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/employee/${id}`, {
      method: "DELETE",
    });
    setData((prev) => prev.filter((emp) => emp.id !== id));
  };

  // const filteredData = data.filter()

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          HRMS Dashboard
        </h1>

        {/* Button */}
        <div className="mb-6">
          <button className="bg-green-500 hover:bg-green-600 text-white text-center font-semibold px-5 py-2 rounded-lg shadow-sm transition-all duration-200 cursor-pointer">
            Add Employee
          </button>
        </div>

        {/* Employee Cards */}
        {data.length > 0 ? (
          <div className="space-y-4">
            {data.map((d) => (
              <Employee key={d.id} {...d} onDelete={() => handleDelete(d.id)} />
            ))}
          </div>
        ) : (
          <div className="min-h-80 flex items-center justify-center">
            <p className="text-gray-400 text-center">
              Add your first employee to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeesList;
