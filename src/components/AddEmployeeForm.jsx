import React from 'react'

const AddEmployeeForm = () => {
  return (
    <>
    {/* <h1>Add Employee</h1> */}
    <h4>Fill out the details below to add a new employee.</h4>
    <form>
      
      <div>
        <label for="fullName">Full Name</label>
        <input type="text" for="fullName" placeholder='Enter full name' className='p-4 m-2 border-gray-100 w-auto h-2'/>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" for="email" placeholder='Enter email' className='p-4 m-2 border-gray-100 w-auto h-2'/>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" for="password" placeholder='Enter password' className='p-4 m-2 border-gray-100 w-auto h-2'/>
      </div>
      <div>
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" for="confirmPassword" placeholder='Confirm password' className='p-4 m-2 border-gray-100 w-auto h-2'/>
      </div>
    </form>
    </>
  )
}

export default AddEmployeeForm