import "../tabProgressTracker.css"
import { useState } from "react"

export default function NumberButtons(props) {
  const [buttonColor, setButtonColor] = useState("")
  return (
    <>
      {/* 1-15 buttons */}
      <div className="numberButtons" style={{ display: "flex" }}>
        <button
          style={{
            border: "2px solid grey",
            borderRadius: "50%",
            marginRight: "15px",
            backgroundColor: "white",
            padding: "21px",
          }}
          onClick={function (e) {
            setButtonColor((e.target.style.backgroundColor = "lightgreen"))
          }}
        >
          {props.num}
        </button>
      </div>
    </>
  )
}
