import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import ContactHandler from "./ContactHandler";
import './Faq.css'
// import { FaGithub,FaDiscord,FaInstagram } from "react-icons/fa";
import rauchak from '../Assets/organizers/rauchak.jpg';
import swezal from '../Assets/organizers/swezal.jpg';
import shourya from'../Assets/organizers/shourya.jpg'

const contactDetails = [
  {
    name: "Shourya De",
    post: "Technical Head",
    email: "sde_be21@thapar.edu",
    number: "+91 9084022584",
    insta: "shourya.yay",
    img: require("../Assets/organizers/shourya.jpg"),
  },
  {
    name: "Rochak Ranjan",
    post: "General Secretary",
    email: "rranjan_be21@thapar.edu",
    number: "+91 9910709476",
    insta: "tempestrochak",
    img: require("../Assets/organizers/rauchak.jpg"),
  },
  {
    name: "Srishti Jethi",
    post: "Marketing and Management Head",
    email: "sjethi_be21@thapar.edu",
    number: "+91 995862565",
    insta: "_srishti_0210",
    img: require("../Assets/organizers/srishti.jpg"),
  },
  {
    name: "Swezal Manhas",
    post: "Technical Member",
    email: "smanhas_be21@thapar.edu",
    number: "+91 9103064945",
    insta: "swezal_manhas",
    img: require("../Assets/organizers/swezal.jpg"),
  },
  
  
  
];

const Contact = () => {
  return (
    <Container fluid className="home-about-section" id="FAQ">
      <Container>
        <h1 className="white"
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            letterSpacing: "0.5rem",
            paddingBottom: "3rem",
          }}
        >
           CONTACT
        </h1>
        <Row >
          <p className="contact-detail" style={{ color: "white", fontSize: "1.2rem" ,paddingBottom:"1.5rem"}}>
          <b className="red">Astellar</b> is being organized by <b className="red">Microsoft Learn Student Chapter, Derabassi. </b>
          <br/>
          <br/>
          The fastest way to reach us is by contacting any of the following admins on their <b className="red" >Instagram DMs</b>. You can also <a href="https://www.instagram.com/mlsc_db/" target="_blank" rel="noopener noreferrer" style={{color:"#EF4931",fontWeight:"bold",textDecoration:"none"}}>follow us on Instagram</a>

          </p>
          <div className="contact-container">
            {contactDetails.map((data, idx) => (
              <ContactHandler data={data} key={idx} />
            ))}
          </div>
        </Row>
        
         
      </Container>
    </Container>
  );
};

export default Contact;
