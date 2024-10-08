
import { useState } from "react";
import Navbar from "./components/navbar"


function App() {
  const [text, setTask] = useState("")
  const [pending, setPending] = useState([])
  const [completed, setCompleted0] = useState([])
  const addTask = (value_text) => {
    setPending((value) => {
      return [...value, value_text]
    })
  }


  const deleteTask = (index_) => {
    console.log("",index_)
    // setPending((value) => value.filter((_, index) => decide_filter(index, index_)))
    setPending((value) => value.filter((_, index) => index!= index_))
  }

  return (
<>
<Navbar />
<div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ flexDirection: "row", border: "2px solid black" }}>
        <h1 className="xm1" style={styles}>todo app</h1>
        <div>
          <input style={{ bo4rder: "2px" }} onChange={(e) => setTask(e.target.value)} placeholder="enter the task" type="text" />
          <button onClick={() => addTask(text)}>addTask</button>
        </div>
      </div>̥

      <div>
        <ul>
          {pending.map((value, index) => (
            <li key={index}><div onClick={() => deleteTask(index)}>{value}</div></li>
          ))
          }

        </ul>
      </div>
    </div >
    </>
  )
}
var styles = {

  align: "center",
  backgroundColor: "red"
}
export default App;
