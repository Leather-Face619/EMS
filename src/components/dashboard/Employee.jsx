import React from 'react'
import Header from '../other/header'
import TaskListNum from '../other/TaskListNum'
import TaskList from '../other/TaskList'
const Employee = () => {
  return (
    <div className=' p-12 bg-[#1C1C1C] h-screen'>
    <Header/>
    <TaskListNum/>
    <TaskList/>
    </div>
  )
}

export default Employee