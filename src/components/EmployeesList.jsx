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

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:3000/employees/${id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setData((prev) => prev.filter((emp) => emp.id !== id));
      }
    } catch (err) {
      console.log("Delete failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
          HRMS Dashboard
        </h1>

        {/* Add Button */}
        <div className="flex justify-start mb-8">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-sm transition cursor-pointer">
            Add Employee
          </button>
        </div>

        {/* Employee Cards OR Empty State */}
        {data.length > 0 ? (
          <div className="space-y-6">
            {data.map((d) => (
              <Employee
                key={d.id}
                {...d}
                onDelete={() => handleDelete(d.id)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-24 text-center text-gray-500 text-lg font-medium">
            <p>No employees yet.</p>
            <p className="text-gray-400 text-base mt-2">
              Add your first employee to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeesList;