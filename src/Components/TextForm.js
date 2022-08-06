
import React, {useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState('Enter The Text');
    
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
       setText(newText)
       props.showAlert("Converted To UpperCase!","success");

    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
       setText(newText)
       props.showAlert("Converted To LowerCase!","success");

    }
    const handleClearClick = ()=>{
        let newText =("");
       setText(newText)
       props.showAlert("TEXT Cleared !!!","success");

    }
    const handleCopy =()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied To Clipboard!","success");
    }
    const handleExtraSpaces =()=>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed","success");

    }


    const HandleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)

    }
   
   // text= "New text"; // Wrong way to change the state
   // setText("new Text"); Correct way to change the state
  return (
    <>
       <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1> 
        <div className="mb-3">
          
        <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor : props.mode==='dark'?'#545454':'white',color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <div className="container my-3" >
    <h1>Preview</h1>
    <p>{text.length>0?text:"ENTER ABOVE TO PREVIEW"}</p>
    </div>
    </div>


    


    </>
    
  )
}
