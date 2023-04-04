import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'



function App() {

  
  const [tabs,setTabs] = useState([])
  const [load,setLoad]= useState(true)
  
  async function LoadItem(){
        setLoad(true)
  try {
        const res = await fetch(url)
        const data = await res.json()
        setTabs(data)
        setLoad(false)
  } catch (error) {
        setLoad(false)
        console.log(error)
  }
  
  }

  
  useEffect(()=>{
  LoadItem()
  // console.log(tabs)
  },[])
  console.log(tabs)

  if(load){
    return(
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }


  return <div>{
    tabs.map(item=>{
      return(
        <section>
          
        </section>
      )
    })
    }</div>
}

export default App
