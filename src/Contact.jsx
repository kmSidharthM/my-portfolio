import mailgif from './assets/mail.gif'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import illust from './assets/illust.svg'
import illust1 from './assets/illust1.svg'

const Contact = () => {
  return ( 
    <div className="app-contact">
      <div className="contact-body">
        <div className="contact-desc">
          <p style={{fontSize : 50, fontWeight : 600, color:'red', marginBottom : 10}}>Lets Connect!</p>
          <p style={{fontSize : 27, fontWeight : 200,}}>Got a question or job offer, or just want<br /> to say hello? Go ahead.</p>
        </div>
        <div className="mail">
          <a href="mailto:kmsidharthmurali@gamil.com"><img src={mailgif} width={300} /></a>
        </div>
        <div className="socialmed">
        <a href="https://github.com/kmSidharthM" target='_blank'><img className="image-1" src={github} width={50} /></a>
        <a href="https://www.linkedin.com/in/kmsidharthmurali/" target='_blank'><img className="image-1" src={linkedin} width={50} /></a>
        </div>
      </div>
      <div className="illustration">
        <img src={illust} width={400}/>
      </div>
      <div className="illustration1">
        <img src={illust1} width={500}/>
      </div>
    </div>
   );
}
 
export default Contact;