import React from 'react'
import { BookmarkPlus } from 'lucide-react'
const WatchList = () => {
  return (
    <div className='watchlist'>
      <h4><BookmarkPlus className='watchlist-icon' size={22} /> <span id="watchlist-title">WatchList</span></h4>
    </div>
  )
}

export default WatchList