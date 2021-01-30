import React from "react"
import Accordion from "./componnets/Accordion"
import Search from "./componnets/Search"

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework"
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
];

const App = () => {
  return (
    <div className="container-fluid">
      <Search />
    </div>
  )
}

export default App