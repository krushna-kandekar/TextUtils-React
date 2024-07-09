import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked: ' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLoClick = () => {
    // console.log('Lowercase was clicked: ' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleCapClick = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Converted to First Letter CapitalizedeCase!", "success");
  };

  const handleClearClick = () => {
    // console.log('Text was Cliared: ' + text);
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra Spaces Removed!", "success");
  }

  const handleOnChange = (event) => {
    // console.log('on change');
    setText(event.target.value);
  };
  const [text, setText] = useState(""); //introducing to hooks
  // text = "new text"; //wrong way to change the state
  // setText("new text"); //correct way to change the state
  return (
    <>
      <div className="container" style={{color:props.mode=== 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark'?'gray':'white', color:props.mode=== 'dark'?'white':'#042743' }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCapClick}>
          Capitalized Case
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Case
        </button>

        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter somthing in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
