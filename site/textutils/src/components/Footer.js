import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';

export default function Footer()
 {
    let date = new Date();
  let year = date.getFullYear();
  return (
    <div>
    <Container fluid className="footer" style={{backgro:"#C2C1B6"}}>
        <h1>Asterllar</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam maxime ex quia?</h5>  
        <h5>Connect!!</h5>                
        <div className="icons">
           
            <a href="https://www.instagram.com/mlsc_db "> <i className="fa-brands fa-instagram-square" style={{color:"black", fontSize:"1.5rem",padding:"0.3rem"}}></i></a>
            <a href="https://www.linkedin.com/search/results/all/?keywords=mlsc&origin=GLOBAL_SEARCH_HEADER&sid=0K4"> <i className="fa-brands fa-linkedin" style={{color:"black", fontSize:"1.5rem",padding:"0.3rem"}}></i></a>
           
        </div>

        <Row>
          <Col md="12" className="footer-copywright">
            <h3>
              Copyright © {year}
              <br />
              Created with ❤ by <b className="red">Microsoft Learn Student Chapter, Derabassi. </b>
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
