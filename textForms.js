import React, {useState}from 'react'

export default function TextForms(props) {
    const [text, setText] = useState('Enter your text')
    const handleUpClick = ()=>{
        console.log("you have clicked");
        let newText= text.toUpperCase();
        setText(newText)
    }
    const onhandlechange = (event)=>{
        setText(event.target.value)
        
    }
  return (
    <div>
        <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} onChange={onhandlechange} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
  )
}
