const Employee = ({ id, name, age, dept, salary }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Dept: {dept}</p>
      <p>Salary: {salary}</p>
    </div>
  )
}

export default Employee