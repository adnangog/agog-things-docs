import React, { useState, useEffect } from 'react'
import Loading from '../../package/components/loading';

export default function App() {
  const [isShow, setIsShow] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsShow(false)
    },3000)
  },[])
  return <div>
    <Loading isShow={isShow} />
  </div>;
}