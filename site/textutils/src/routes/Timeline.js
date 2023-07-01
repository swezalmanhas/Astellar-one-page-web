import React from "react";
import { Container, Row } from "react-bootstrap";
import TimelineItem from "./TimelineItem";
import './Timeline.css'

const timelineData = [
  {
    text: "Stargaze : The Treasure Hunt",
    date: "Oct 14th 2022",
    button: "DETAILS",
    category: {
      tag: "Offline",
     
    },
  },
  {
    text: "G4M3 : LAN and Console Gaming Event",
    date: "Oct 14th 2022",
    button: "DETAILS",
    category: {
      tag: "Offline",
     
    },
  },
  {
    text: "Astellar : The Cryptic Hunt",
    date: "Oct 15th 6PM to Oct 16th 6PM ",
    button: "DETAILS",
    category: {
      tag: "Online",
      
    },
   
  },
  {
    text: "BrokerJack : The Crossword Competition",
    date: "Oct 16th 2022",
    button: "DETAILS",
    category: {
      tag: "Offline",
      
    },
  },
];

function Timeline1() {
  return (
    <Container fluid className="home-about-section" id='Event'>
      <Container >
        <h1 className="white"
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            letterSpacing: "0.5rem",
            paddingBottom: "3rem",
            paddingTop:"3rem",
          }}
        >
          Event Timeline
        </h1>
        <Row>
          <div className="timeline-container">
            {timelineData.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
            ))}
          </div>
        </Row>
      </Container>
    </Container>
  );
}
export default Timeline1;
