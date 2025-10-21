import React from 'react'

const Header = ({setUser}) => {
  
  const data=JSON.parse(localStorage.getItem('currentUserData'))
  const user=JSON.parse(localStorage.getItem('currentUser'))

  const logout=()=>{
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentUserData')
    setUser('')
  }

  return (
    <div className='flex items-center justify-between py-4 px-8 lg:px-16 '>
        <h1 className='text-2xl'>Hello,<br/> <span className='text-3xl'>{user.role=='admin' ? "Admin" : data.firstName}👋</span></h1>
        <button onClick={logout} className='bg-red-500 text-white py-1 outline-none cursor-pointer px-4 rounded-md active:scale-95'>Log Out</button>
    </div>
  )
}

export default Header
