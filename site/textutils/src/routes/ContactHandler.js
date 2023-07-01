import React from "react";
import './Faq.css'
const ContactHandler = ({ data }) => (
    
      <div className="org hover-highlight">
    
        <img src={data.img} alt={data.name}></img>
        <span id="name" style={{ textAlign: "center" ,color:"white" }}>{data.name}</span>
        <span style={{ textAlign: "center" ,color:"grey",fontWeight:"normal" }}>{data.post}</span>
        <strong style={{color:"whitesmoke",padding:"2px"}}>Phone: <a href={`tel:${data.number}`} style={{ textDecoration:"none",textAlign: "center" ,color:"#EF4931" }}>{data.number}</a></strong>
        <strong style={{color:"whitesmoke",padding:"2px"}}>Email: <a href={`mailto:${data.email}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none", textAlign: "center" ,color:"#EF4931" }}>{data.email}</a></strong>
        <strong style={{color:"whitesmoke",padding:"2px"}}>Instagram: <a href={`https://instagram.com/${data.insta}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none",textAlign: "center" ,color:"#EF4931" }}>{data.insta}</a></strong>
        </div>
     
  );
export default ContactHandler;
  