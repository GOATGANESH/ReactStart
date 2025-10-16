import React from 'react'

const Navbar = () => {
  return (
    <div className='px-13  flex justify-between items-center'>
        <button className='uppercase bg-white tracking-wide font-semibold text-black rounded-full py-1 px-6 '>target audience</button>
        <div>
            <p className='uppercase text-sm  text-white tracking-widest'>digital banking platform</p>
        </div>
    </div>
  )
}

export default Navbar;