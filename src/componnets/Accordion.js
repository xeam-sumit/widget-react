import React, { useState } from "react"

const Accordion = ({ items }) => {
  const [activeIndex, setActiveindex] = useState(null);
  const onTitleClick = (index) => {
    setActiveindex(index)
  }
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "" : "active"
    return (
      <div key={index} className="border mb-1 p-2">
        <div className="item-title active"
          onClick={() => onTitleClick(index)}
        >
          <i className="bi bi-caret-down-fill" style={{ fontSize: "1.4rem", marginRight: "10px" }}></i> <h4> {item.title}</h4>
        </div>
        <div className={`content ${active}`}>
          <h6>{item.content}</h6>
        </div>
      </div >
    )
  })
  return (
    <div className="container">
      {renderedItems}
    </div>
  )
}

export default Accordion