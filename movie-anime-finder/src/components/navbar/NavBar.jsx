import React from 'react'
import Title from './Title'
import SearchField from './SearchField'
import WatchList from './WatchList'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-title-container'>
        <Title/>
        </div>
        <div className='navbar-search-watchlist-container'>
        <SearchField/>
        <WatchList/>
        </div>
    </div>
  )
}

export default NavBar