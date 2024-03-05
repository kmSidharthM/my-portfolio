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
import leetcode from './assets/leetcode.png'
import gfg from './assets/gfg.png'
import cn from './assets/codingNin.png'

const About = () => {
  return ( 
    <div className="app-about">
      <div className="left-content">
        <div className="basic-intro">
        <p style={{fontSize : 40, fontWeight : 200, marginBottom : 10,}}>About Me</p>
          <p>I'm a 4th year undergrad in Computer Science from Government Engineering College Thrissur with a strong background in programming and a passion for solving problems. Driven to succeed as a software engineer, while pursuing continuous improvement.</p>
          <p>I have worked as a Software Engineer Intern at Ayu Health (May - Aug 2023).</p>
          <p>I Completed my 12th from Kendriya Vidyalaya Keltron Nagar, Kannur in Computer Science.</p>
        </div>
        <p style={{fontSize : 40, fontWeight : 200, marginBottom : 10, marginTop : 50}}>Skills</p>
        <div className="skills">
          <img src={cpp} alt="cpp-logo" width={50}/>
          <img src={python} alt="python-logo" width={50} />
          <img src={java} alt="java-logo" width={50} />
          <img src={html} alt="html-logo" width={50} />
          <img src={css} alt="css-logo" width={50} />
          <img src={js} alt="js-logo" width={50} />
          <img src={rt} alt="react-logo" width={50} />
        </div>
        <p style={{fontSize : 40, fontWeight : 200, marginBottom : 10, marginTop : 50}}>Profiles</p>
        <div className="skills">
          <a href="https://leetcode.com/kmSidharthM/" target='_blank'><img src={leetcode} width={50} /></a>
          <a href="https://auth.geeksforgeeks.org/user/kmsidharth" target='_blank'><img src={gfg} width={50} /></a>
          <a href="https://www.codingninjas.com/studio/profile/9e7939db-17fc-4066-9b69-2ff464977e38" target='_blank'><img src={cn} width={50} /></a>
        </div>
      </div>
      <div className="right-content">
        <img className='image1' src={proImage} alt="profile image"/>
        <p style={{fontSize:22}}>KM Sidharth Murali</p>
        <p>4th year cse</p>
        <p className='personal-info'><span><img src={education} width={25} /></span> govt. engineering college thrissur</p>
        <p className='personal-info'><span><img src={location} width={20} /></span> kannur, kerala</p>
      </div>
    </div>
   );
}
 
export default About;