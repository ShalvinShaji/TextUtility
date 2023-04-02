import React, {useState} from 'react'

export default function Textarea(props) {
    const convertUppercase = () =>{
        console.log("convert button clicked");
        let newText=text.toUpperCase(); //text in the area converted to uppercase.
        setText(newText);
    }
    const convertLowercase = () =>{
        console.log("convert button clicked");
        let newText=text.toLowerCase(); //text in the area converted to uppercase.
        setText(newText);
    }

    const clearText =()=>{
      setText("")
    }

    const clearTextarea =()=>{
      if (text==="Enter the text here."){
        setText("")
      }
    }
    
    const changeUp = (event) =>{
        setText(event.target.value) //allow us to wite content in the text area.
        // console.log("onchange clicked");

    }

  const [text, setText] = useState("");
  const wordCount=(text)=>{
      const wordsArray = text.split(' ');
      const nonEmptyWordsArray = wordsArray.filter(word => word !== '');
      return nonEmptyWordsArray.length;
      }

  const countCharacters=(text)=>{
    const strWithoutSpaces = text.split(' ').join('');
    return strWithoutSpaces.length;
  
  }

  const copyToClipboard = () => {
    let copyText=document.getElementById('textbox');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }

  const RemoveExtraSpace = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
 }
  

  return (
<>
<div className='container'>
  <h3 className='mt-4'>Enter the {props.type} for conversion:</h3>
  <textarea value={text} placeholder="Enter the text here..." className="form-control" onClick={clearTextarea} onChange={changeUp} id="textbox" rows="8"></textarea>
<div className="row d-flex">
    <div className="col-md-6 d-flex justify-content-center justify-content-lg-evenly">
            <button className='btn btn-danger mx-3 mt-3 w-25' onClick={convertUppercase} >Convert to Uppercase</button>
            <button className='btn btn-danger mx-3 mt-3 w-25' onClick={convertLowercase} >Convert to Lowercase</button>
            <button className='btn btn-danger  mt-3 w-25' onClick={copyToClipboard} >Copy to Clipboard</button>
    </div>
    <div className="col-md-6 d-flex  justify-content-center justify-content-lg-start">
            <button className='btn btn-danger me-3 mt-3 w-25' onClick={RemoveExtraSpace} >Remove Extra Space</button>
            <button className='btn btn-danger mx-3 mt-3  w-25' onClick={clearText} >Clear Text</button>
    </div>
   
</div>
  
</div>
<div className="container mt-4">
  <h3>Text summary</h3>
  <p>{wordCount(text)} of words and {countCharacters(text)} of charecters.</p>
  <p>{0.008 * wordCount(text)} minutes of read.</p>
</div>
<div className="container mt-5">
  <h3 className='mt-3'>Preview of the Text:</h3>
  <p className="text-justify">{text}</p>
  
</div>
</>
    )
}
