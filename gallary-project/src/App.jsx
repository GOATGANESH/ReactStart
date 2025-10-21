import React, { useEffect, useState } from 'react'
import { ChevronLeft,ChevronRight } from 'lucide-react';
const App = () => {
  const [index, setIndex] = useState(1)
  const [photosContainer,setPhotosContainer]=useState([])

  async function getData(){
    const res= await fetch(`https://picsum.photos/v2/list?page=${index}&limit=12  `)

    const data=await res.json()
    setPhotosContainer(data)
  }

  useEffect(function(){
    getData()
    
  },[index])

  let printUserData="Loading......"

  if(photosContainer.length>0){
    printUserData=photosContainer.map((photo,idx)=>{
        return(
          <div key={idx}>
            <img className='img' src={photo.download_url} alt="" />
          </div>
        )
    })
  }

  return (
    <div className='container'>
      <div className='gallary-container'>
        {printUserData}
      </div>
      <div className="controls">
        <button className='prev' onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setPhotosContainer([])
          }
          }} 
          style={{opacity:index==1?0.5:1}}
          ><ChevronLeft size={24} />Prev</button>
        <p>Page-no {index}</p>
        <button className='next' onClick={()=>{
          setIndex(index+1)
          setPhotosContainer([])
          }}>Next <ChevronRight size={24} /></button>
      </div>
    </div>
  )
}

export default App