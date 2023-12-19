import React from 'react'
import './Userlogin.css'



const Userlogin = () => {
    const handleEmailFocus = () => {
        console.log("yalniz  .ru domeinleri ucun");
      };
    
      const handlePasswordFocus = () => {
        console.log("8 simvoldan az olmamalidir");
      };
  return (
    <div className='divForm'> 
        <form action="">
            <input type="email" placeholder='Email daxil edin' onFocus={handleEmailFocus}/>
        <br/>
            <input type="password" placeholder='Parol daxil edin' onFocus={handlePasswordFocus}/>
            <br />
            <button className='buttonclass' type='submit'>  Login</button>
        </form>
    </div>
  )
}

export default Userlogin