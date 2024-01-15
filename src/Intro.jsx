import profileImage from'./assets/pro_photo.png'
const Intro = () => {
  return ( 
      <div className="app-intro">
        <div >
          <h1 style={{fontWeight : 700, fontSize : 60, marginBottom : 0}}>Hi,<br /> I'm <span className="name">Sidharth<div className='cursor'></div></span></h1>
          
          <h4 style={{fontWeight : 200, fontSize : 20, marginTop : 0}}>Frontend Developer</h4>
        </div>
        <div className="pro-image">
          <img className="image" src={profileImage} alt="profile photo" />
        </div>
      </div>
   );
}
 
export default Intro;