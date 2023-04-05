import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'



function App() {

  
  const [tabs,setTabs] = useState([])
  const [load,setLoad]= useState(true)
  const [value,setValue] = useState(0)
  
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
  // console.log(tabs)

  if(load){
    return(
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

const {title,company,dates,duties} = tabs[value]
  
   
      return(
        <section className="section ">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
      <div className="btn-container">
        {/* btn container */
        
        tabs.map((item,index)=>{
          return(
            <button key={item.id} 
            onClick={()=>setValue(index) }
            className={`job-btn ${index === value && 'active-btn'}`} 
          >{item.company }</button>
          )
        })
        
        }
        </div>
       
        {/* job info */
        duties.map(item=>{
          return(
            <div>
              {item}
            </div>
          )
        })
        }
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
      )
      }


  


export default App
