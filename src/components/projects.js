import Tab from 'react-bootstrap/Tab';
import { Container, Row, Col, Nav } from "react-bootstrap"; 
import ProjectCard from './projectcard';
import TrackVisibility from 'react-on-screen'; 
import img1 from './images.jpg'
import img2 from './images2.jpg'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'
import img6 from './img6.png'
import './projects.css';


export const Projects = () => {

  const projects = [ 
    { 
      title: "UI/UX", 
      description: "Design & Development", 
      imgUrl: img1
    }, 
    { 
      title: "Coding", 
      description: "Design & Development", 
      imgUrl: img2
  },
  { 
      title: "Crypto", 
      description: "proof of authority blockchain", 
      imgUrl: img3
  },
   { 
      title: "Cryptography", 
      description: "Scripting", 
      imgUrl: img4
  },
   { 
      title: "Networking", 
      description: "Design a Network", 
      imgUrl: img5
  },
   { 
      title: "Network scan", 
      description: "scanning for vulnerabilities", 
      imgUrl: img6
  }
]; 

  return (
    <section className='projects' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility> 
              {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <div className='container text-center'>
                    <h2 className='text'>Projects</h2>
                    <p className='text'>Here are my projects that I did</p>
                  </div>

             
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
  <Nav 
    variant="pills" 
    className="nav-pills mb-5 justify-content-center align-items-center custom-tabs" 
    id="pills-tab"
  >
    <Nav.Item>
      <Nav.Link eventKey="first">Tab 1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="second">Tab 2</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="third">Tab 3</Nav.Link>
    </Nav.Item>
  </Nav>

    

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}> 
                   
                      <Tab.Pane eventKey="first"> 
                        <Row> 
                          {
                            projects.map((project, index) => { 
                              return ( 
                                <ProjectCard 
                                  key={index} 
                                  {...project} 
                                /> 
                              ) 
                            }) 
                          } 
                        </Row> 
                      </Tab.Pane> 

                      <Tab.Pane eventKey="second"> 
                        <p>Second tab content goes here.</p> 
                      </Tab.Pane> 

                      <Tab.Pane eventKey="third"> 
                        <p>Third tab content goes here.</p> 
                      </Tab.Pane> 
                    </Tab.Content> 
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;