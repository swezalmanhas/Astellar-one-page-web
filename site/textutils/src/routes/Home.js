import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import rect from '../Assets/rect.png'
import shourya from '../Assets/organizers/shourya.jpg'


function Home() {

  return (
   
    <div>
     
      
      <Container fluid className="home-section" id="/" style={{ background: "#C2C1B6" }} >
      
        
      <div className="intro">
      
      <div className="i-left">
        <div className="i-name">
          <h1>ASTELLAR</h1>
          <span>15-october-2023</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi, temporibus culpa dolor tempora aliquam itaque sit iste est incidunt, totam fuga animi. Ad impedit similique beatae consequuntur nesciunt veritatis perspiciatis officia magni dolore tempora? Dolorem?</p>
        </div>
        <button className=" button i-button">Register Your Name</button>
      </div>

      <div className=" i-right">
        {/* <img src={rect} alt=""></img> */}

        {/* <img src={shourya} alt=""></img> */}
      </div>
      </div>
     
        </Container>
    </div>
  );
}

export default Home;
