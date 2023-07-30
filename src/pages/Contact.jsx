import React, { useEffect } from 'react'
import _contact from '../components/Contact/_contact'
import TranstionPages from './TranstionPages'
const Contact = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  },[])
  return (
    <div >
      <TranstionPages/>
      <_contact/>
    </div>
  )
}

export default Contact
