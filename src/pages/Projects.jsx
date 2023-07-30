import React from 'react'
import Project from '../components/Projects/_project'
import Card from '../components/Projects/_card'
import { useEffect } from 'react'
import TranstionPages from './TranstionPages'
const Projects = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  },[])
  return (
    <div>
      <TranstionPages/>
      <Card/>
      <Project/>
    </div>
  )
}

export default Projects
