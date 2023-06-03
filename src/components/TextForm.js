import React , { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert(": Converted to Uppercase","success")
  }
  const handleLoClick=()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","success")
  }
  const handleClearClick=()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText='';
    setText(newText)
    props.showAlert(": Clear Text","success")
  }
  const handleExtraSpace=()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(": Removed Extra Spaces","success")
  }
  const handleCopyClick=()=>{
    // console.log("Uppercase was clicked"+ text);
    let Text=document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    props.showAlert(": Copy to clipbord","success")
  }
  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container'style={{color: props.mode === 'dark'? 'white':'grey'}}>
      <h1>{props.heading}</h1> 
      <div className="mb-3">
      {/* <label for="myBox" className="form-label">Example textarea</label> */}
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey':'white',color: props.mode === 'dark'? 'white':'grey'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowerercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear chat</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Clear Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'grey'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text to Preview"}</p>
    </div>
    </>
  )
}
