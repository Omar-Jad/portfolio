import { Container, Row, Col } from "react-bootstrap";
import fac from '../components/fac.jpg'
import link from '../components/link.jpg'
import insta from '../components/insta.jpg'
import port from '../components/port.png'
export const Footer=()=>{
    return (
        <footer>
            <Container>
                <Row className='align-items-center'>
                    <Col size={12} sm={6}>
                    <img className='logo'
            src={port}alt="logo" 
            style={{ width: '30px' }} 
                />
                    </Col>
                    <div  className="social-icon">
                        <span className="navbar-text">
            <a href='https://www.linkedin.com/in/omar-mohamed-a2a9b7336/' target='_blank' ><img  src={link} alt='icon'></img></a>
              <a href='https://www.facebook.com/share/1Ai815TGBQ/' target='_blank'> <img src={fac} alt='icon'></img></a>
               <a href='https://www.instagram.com/omarjad__?igsh=MWg1NHNsemsxZGJqMA==' target='_blank'> <img src={insta} alt='icon'></img> </a>
               </span>

                    </div>
                    <p>Copyright 2026. All Rights Reserved</p>

                </Row>
            </Container>
        </footer>

    )
}