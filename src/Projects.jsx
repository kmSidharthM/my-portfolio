import project1 from './assets/project1.svg'
import project2 from './assets/project2.svg'
import project3 from './assets/project3.svg'
import project4 from './assets/project4.svg'
import project5 from './assets/project5.svg'
import project6 from './assets/project6.svg'
import project7 from './assets/project7.svg'
import project8 from './assets/project8.svg'
import project9 from './assets/project9.svg'
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [content, setContent] = useState({})
  const project_details = [
    {
      'title' : 'Accident Detection and Alert System',
      'desc' : 'It includes few hardware sensors like gyroscope, acclerometer and gps tracker that could detect if an accident happened or not and alert hospital, police and family of the same. It also has an app support to track bike location and to update emergency contact informations.',
      'status' : 'In Progress',
      'link' :  'null'
    },
    {
      'title' : 'Mathwiz',
      'desc' : 'MathWiz is an interactive educational game that includes a hand tracking module and the game provides Math problems for users to solve using their hand movements.',
      'status' : 'Completed',
      'link' :  '#'
    },
    {
      'title' : 'Speak-Up',
      'desc' : 'Speak-Up is a simple app created in flutter using a text to speech library. It converts user specified text into speech.',
      'status' : 'Completed',
      'link' :  'https://github.com/kmSidharthM/Speak-Up'
    },
    {
      'title' : 'Space Invader',
      'desc' : 'Space Invader is a simple game built using python module Pygame. A spaceship which can move right to left should shoot down the enemies before the reach the spaceship.',
      'status' : 'Completed',
      'link' :  'https://github.com/kmSidharthM/Space-Invader'
    },
    {
      'title' : 'Virtual Mouse',
      'desc' : 'This project is built using python library Mediapipe. Here mouse is controlled using hand gestures. Index and middle finger together can be used to move the cursor, flicking the index finger causes left click and flicking the thumb causes right click.',
      'status' : 'Completed',
      'link' :  'https://github.com/kmSidharthM/Virtual-Mouse'
    },
    {
      'title' : 'Rock Paper Scissor',
      'desc' : 'The childhood game rock paper scissor recreated using HTML, CSS and JavaScript. Here the user plays against the computer where user have to choose from either rock, paper or scissor.',
      'status' : 'Completed',
      'link' :  'https://github.com/kmSidharthM/rock-paper-scissor'
    },
    {
      'title' : 'Wordle',
      'desc' : 'A wordle like program created using python. Wordle is a word game where the user guess a 5 letter word provided within 5 tries.',
      'status' : 'In Progress',
      'link' :  'https://github.com/kmSidharthM/Wordle_Try'
    },
    {
      'title' : 'De-Code',
      'desc' : 'A C++ program which helps to code and decode a text into a secret code and vice versa.',
      'status' : 'Completed',
      'link' :  'https://github.com/kmSidharthM/De-Code'
    },
  ]
  return ( 
    <div className="app-project">
      <div className="projects">
        <div className="project" onClick={() => {
          setContent(project_details[0])
          onOpen()
        }}>
          <img src={project2} width={300} alt="" />
          <p style={{fontSize : 20, fontWeight : 200, marginTop : 10,}}>Accident Detection and Alert System</p>
        </div>
        
        <div className="project" onClick={() => {
          setContent(project_details[1])
          onOpen()
        }}>
          <img src={project9} width={300} alt="" />
          <p style={{fontSize : 20, fontWeight : 200, marginTop : 10,}}>MathWiz</p>
        </div>
        
        <div className="project" onClick={() => {
          setContent(project_details[2])
          onOpen()
        }}>
          <img src={project7} width={300} alt="" />
          <p style={{fontSize : 20, fontWeight : 200, marginTop : 10,}}>Speak Up</p>
        </div>
        
        <div className="project" onClick={() => {
          setContent(project_details[3])
          onOpen()
        }}>
          <img src={project3} width={300} alt="" />
          <p style={{fontSize : 20, fontWeight : 200, marginTop : 10,}}>Space Invader</p>
        </div>
        
        <div className="project" onClick={() => {
          setContent(project_details[4])
          onOpen()
        }}>
          <img src={project1} width={300} alt="" />
          <p style={{fontSize : 20, fontWeight : 200, marginTop : 10,}}>Virtual Mouse</p>
        </div>
        
        <div className="project" onClick={() => {
          setContent(project_details[5])
          onOpen()
        }}>
          <img src={project6} width={300} alt="" />
          <p style={{fontSize : 20, fontWeight : 200, marginTop : 10,}}>Rock Paper Scissor</p>
        </div>
        
        <div className="project" onClick={() => {
          setContent(project_details[6])
          onOpen()
        }}>
          <img src={project5} width={300} alt="" />
          <p style={{fontSize : 20, fontWeight : 200, marginTop : 10,}}>Wordle</p>
        </div>
        
        <div className="project" onClick={() => {
          setContent(project_details[7])
          onOpen()
        }}>
          <img src={project8} width={300} alt="" />
          <p style={{fontSize : 20, fontWeight : 200, marginTop : 10,}}>De-Code</p>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size='lg'>
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropBlur='2px'
      />
        <ModalContent>
          <ModalHeader style={{color:'black', fontSize : 20, fontWeight : 600}}>{content['title']}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p style={{color:'black'}}>{content['desc']}</p>
            <p style={{color:'black'}}><br />Status : {content['status']}</p>
            <a href={content['link']} style={{color:'blue'}} target='blank'><br />Github Link</a>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
   );
}
 
export default Projects;