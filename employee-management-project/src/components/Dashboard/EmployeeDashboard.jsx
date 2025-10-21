import React from 'react'
import Header from '../other/Header'
import TaskTracker from '../other/TaskTracker'
import TaskList from '../tasklist/TaskList'
const EmployeeDashboard = (props) => {
  const data=JSON.parse(localStorage.getItem('currentUserData'))
  return (
    <div className='bg-[#1C1C1C] h-screen'>
      
      <Header data={data} setUser={props.setUser}/>
      <TaskTracker data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard