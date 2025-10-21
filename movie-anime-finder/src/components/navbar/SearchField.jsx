import React from 'react'
import {Search} from 'lucide-react'
const SearchField = () => {
  return (
    <div className='searchfield'>
      <input type="text" name="movie-anime-name" placeholder='Search Movie or Anime by Name' className='movie-anime-input'/>
      <button><Search size={22} /></button>
    </div>
  )
}

export default SearchField