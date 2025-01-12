import React from 'react'
import { useLocation } from 'react-router-dom'

const DetailPage = () => {

    const location = useLocation()

    const {item} = location.state

    

  return (
    <div>
       {item ? <div><h1>{item.title}</h1>
       <h1>{item.price}</h1>
       <img style={{width:'100px'}} src={item.image}/></div> : <p>melumat yoxdu</p>}
    </div>
  )
}

export default DetailPage