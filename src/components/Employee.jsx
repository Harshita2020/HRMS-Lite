const Employee = ({ id, name, age, dept, salary, onDelete }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <span className="text-green-600 font-semibold">₹{salary}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-3"></div>

      {/* Bottom Row */}
      <div className="flex justify-between text-sm text-gray-500">
        <span>Dept: {dept}</span>
        <span>Age: {age}</span>
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-8 py-2.5 rounded-lg transition w-fit"
          onClick={onDelete}
        >
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
};

export default Employee;
