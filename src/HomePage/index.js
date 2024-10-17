import {useState} from 'react'
import './index.css'
const Home=()=>{
    const { getYear}=require('date-fns')
    const [user,setUser]=useState('')
    const [eligible,setEligible]=useState(0)
    const [select,setSelect]=useState(false)
    const [disable,setDisable]=useState(true)

    console.log(user)
    
    const getData=(event)=>{
    event.preventDefault()
    const year=getYear(user)
    const myAge=new Date().getFullYear()
    const diff=myAge-year
    if (year!==null){
        setSelect(true)
    }
    setEligible(diff)
    }
    const changed=(event)=>{
        setUser(event.target.value)
        setDisable(false)
        
    }
    

    return(
        <div className='mainDiv'>
            <h1 className='mainHead'>Election Department of India </h1>
            <label htmlFor='date'>Select Your Birth Date</label>
            <form onSubmit={getData}>
                <input id="date" onChange={changed} type="Date"/>
                <div>
                    <button disabled={disable} type="submit">Check</button>
                </div>
                {select? 
                    eligible>18 ?
                    <div> 
                        <p className=' eligible text'>You are eligible to vote  </p> 
                        <p className='message'>If you have a voter id you can surely vote to your favorite leader but think twice before choosing your leader</p>
                    </div>
                     : 
                    <div>
                         <p className='text notEligible'>You are not eligible to vote </p>
                         <p className='message'>So sad that you are under 18. You have to wait for some more years.</p>

                    </div> 
                     : null}
            </form>
        </div>
    )
}

export default Home