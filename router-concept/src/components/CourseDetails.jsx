import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const obj=useParams()
  return (
    <div>
        {obj.id}
    </div>
  )
}

export default CourseDetails