import profileImage from'./assets/pro_photo.png'
import { useState, useEffect } from 'react';

const Intro = () => {

  const [isCursor, setIsCursor] = useState('inline')
  
  useEffect(() =>{
    const interval = setInterval(() => {
      setIsCursor((prev) => prev==='inline'?'none':'inline')
    }, 700)

    return() => clearInterval(interval)
  },[])

  

  return ( 
      <div className="app-intro">
        <div >
          <h1 style={{fontWeight : 700, fontSize : 60, marginBottom : 0}}>Hi,<br /> I'm <span className="name">Sidharth<div className='cursor' style={{display : isCursor}}></div></span></h1>
          <h4 style={{fontWeight : 200, fontSize : 20, marginTop : 0}}>Ex-Software Engineer Intern @ Ayu Health <br />Aspiring Frontend Developer</h4>
        </div>
        <div className="pro-image">
          <img className="image" src={profileImage} alt="profile photo" />
        </div>
      </div>
   );
}
 
export default Intro;