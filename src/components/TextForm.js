import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convert to Uppercase!", "success");
  }
  
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Convert to Lowercase!", "success");
  }

  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Convert to Capitalize Text!", "success");
  }

  const handleAlternating  = () => {
    let newText = text.split("").map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    }).join("");
    setText(newText);
    props.showAlert("Convert to Alternating Text!", "success");
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your Text is Copied!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ")); 
    props.showAlert("Clear Your Extra Spaces!", "success");
  }
   
  const handleClearClick = ()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = ' ';
    setText(newText)
    props.showAlert("Clear Your Text!", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter Your Text'); 
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}> 
        <h1>{props.healine}</h1>      
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Convert To Capitalize</button>
        <button className="btn btn-primary mx-2" onClick={handleAlternating}>Convert To Alternating</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy To Clipborad</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words or {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <p>Preview</p>
        <p>{text}</p>
    </div>
    </>
  )
}
