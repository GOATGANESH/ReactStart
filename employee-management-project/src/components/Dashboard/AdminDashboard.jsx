
import CreateTask from '../other/CreateTask'
import Header from '../other/Header'
import AllTaskContainer from '../tasklist/AllTaskContainer'
const AdminDashboard = (props) => {
  return (
    <div className='h-fit bg-[#1C1C1C] w-full '>
      <Header setUser={props.setUser}/>
      <div className='w-full h-max px-3 lg:px-10 overflow-auto'>
      <CreateTask/>
      </div>
      <div className="taskContainer mt-4 w-full h-[50vh]  py-4 px-3 lg:px-8">
        <AllTaskContainer/>
      </div>
    </div>
  )
}

export default AdminDashboard