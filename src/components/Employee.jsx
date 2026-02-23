const Employee = ({ id, name, age, dept, salary }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">

      {/* Top Row */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">
          {name}
        </h2>
        <span className="text-green-600 font-bold">
          ₹{salary}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-2"></div>

      {/* Bottom Row */}
      <div className="flex justify-between text-gray-600 text-sm">
        <span>Dept: {dept}</span>
        <span>Age: {age}</span>
      </div>

    </div>
  );
};

export default Employee;