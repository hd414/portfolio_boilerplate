import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./about.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import CardList from '../../components/Card/CardList';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import a1 from '../../assets/a1.jpg';
const About = () =>{
    return (
        <div id="about">
           <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require('../../assets/a1.jpg')}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
              <div className="about">
          <h1 className="pt-4 pl-5 font-details pb-4">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              
                <Row className=" align-items-start p-2 my-details rounded">
                  Hi there! I am <strong>&nbsp;Himanshu Dodrajka</strong>
                  <br />A passionate programmer and a developer. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, PostgreSQL ,Mongodb.
                  <br />
                  Currently A 3rd year engineering student . Pursuing my B.tech in Computer Engineering from SVNIT Surat.
                  <br />
                  My goal is to Make amazing Web application which can provide the best level of quality and service to users.
                  <br />
    
                  <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                  <br /> <br />
                  
                </Row>
                <br/>
            </Row>
          </Container>

         
        </div>

        <h1 className="pt-2 pl-5 pb-3">My Intersets</h1>
            <CardList/>
              </Fade>
            </Container>
          </div>
        </Parallax>
        
      </div>
        
            

      </div>
    );
}

export default About;
