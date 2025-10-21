import React from 'react'

const TaskTracker = ({data}) => {
  return (
    <div className='flex items-center shrink-0  justify-center flex-wrap gap-2 lg:gap-5   w-full p-4'>
        <div className='card w-[150px] lg:w-[230px]   bg-orange-500 rounded-lg py-4 px-3 text-white'>
            <h1 className='text-4xl mb-1 font-bold'>{data.taskCounts.active}</h1>
            <p className='text-xl font-bold'>New Task</p>
        </div>
         <div className='card w-[150px] lg:w-[230px] bg-green-800 rounded-lg py-4 px-3 text-white'>
            <h1 className='text-4xl mb-1 font-bold'>{data.taskCounts.completed}</h1>
            <p className='text-xl font-bold'>Completed</p>
        </div>
         <div className='card w-[150px] lg:w-[230px] bg-blue-600 rounded-lg py-4 px-3 text-white'>
            <h1 className='text-4xl mb-1 font-bold'>{data.taskCounts.active}</h1>
            <p className='text-xl font-bold'>Accepted</p>
        </div>
         <div className='card w-[150px] lg:w-[230px] bg-red-700 rounded-lg py-4 px-3 text-white'>
            <h1 className='text-4xl mb-1 font-bold'>{data.taskCounts.failed}</h1>
            <p className='text-xl font-bold'>Failed</p>
        </div>
    </div>
  )
}

export default TaskTracker