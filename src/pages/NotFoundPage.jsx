import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {

    const navigation = useNavigate()



  return (
    <div>
        <h1>NOT FOUND PAGE</h1>
        <button onClick={() => navigation(-1)}>go Home</button>
    </div>
  )
}

export default NotFoundPage