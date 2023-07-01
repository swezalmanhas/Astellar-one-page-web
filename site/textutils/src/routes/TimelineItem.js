import React from "react";
import './Timeline.css'
const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
       
      </span>

      <time>{data.date}</time>
      <p>{data.text}</p>
      <button>{data.button}</button>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          
        </a>
      )}
      <span className="circle" />
      <span className="line" />
    </div>
  </div>
);
export default TimelineItem;
