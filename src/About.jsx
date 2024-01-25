import cpp from './assets/cpp.svg'
import python from './assets/python.svg'
import html from './assets/html.svg'
import css from './assets/css.svg'
import js from './assets/js.svg'
import rt from './assets/react.svg'
import java from './assets/java.svg'
import proImage from './assets/pro2.png'
import location from './assets/location.png'
import education from './assets/education.png'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
const About = () => {
  return ( 
    <div className="app-about">
      <div className="left-content">
        <div className="basic-intro">
        <p style={{fontSize : 40, fontWeight : 200, marginBottom : 10}}>About Me....</p>
          <p>I'm a 4th year undergrad in Computer Science from Government Engineering College Thrissur with a strong background in programming and a passion for solving problems. Driven to succeed as a software engineer, while pursuing continuous improvement.</p>
          <p>I have worked as a Software Engineer Intern at Ayu Health (May - Aug 2023).</p>
          <p>I Completed my 12th from Kendriya Vidyalaya Keltron Nagar, Kannur in Computer Science.</p>
        </div>
        <p style={{fontSize : 40, fontWeight : 200, marginBottom : 10}}>Skills</p>
        <div className="skills">
          <img src={cpp} alt="cpp-logo" width={50}/>
          <img src={python} alt="python-logo" width={50} />
          <img src={java} alt="java-logo" width={50} />
          <img src={html} alt="html-logo" width={50} />
          <img src={css} alt="css-logo" width={50} />
          <img src={js} alt="js-logo" width={50} />
          <img src={rt} alt="react-logo" width={50} />
        </div>
        <p style={{fontSize : 40, fontWeight : 200, marginBottom : 10}}>Profiles</p>
        <div className="profiles">
          <p className='personal-info'><span><img src={github} width={35} /></span><a href="https://github.com/kmSidharthM" target='_blank'>kmSidharthM</a></p>
          <p className='personal-info'><span><img src={linkedin} width={35} /></span><a href="https://www.linkedin.com/in/kmsidharthmurali/" target='_blank'>kmsidharthmurali</a></p>
        </div>
      </div>
      <div className="right-content">
        <img className='image1' src={proImage} alt="profile image"/>
        <p>K M Sidharth Murali</p>
        <p>4th year CSE</p>
        <p className='personal-info'><span><img src={education} width={25} /></span> Govt. Engineering College Thrissur</p>
        <p className='personal-info'><span><img src={location} width={20} /></span> Kannur, Kerala</p>
      </div>
    </div>
   );
}
 
export default About;