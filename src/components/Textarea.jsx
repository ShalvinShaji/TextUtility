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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }
  

  return (
<>
<div className='container'>
  <h3 className='mt-5'>Enter the {props.type} for conversion:</h3>
  <textarea value={text} placeholder="Enter the text here..." className="form-control" onClick={clearTextarea} onChange={changeUp} id="exampleFormControlTextarea1" rows="8"></textarea>
  <div className="d-flex justify-content-start">
    <button className='btn btn-danger me-3 mt-3' onClick={convertUppercase} >Convert to Uppercase</button>
    <button className='btn btn-danger me-3 mt-3' onClick={convertLowercase} >Convert to Lowercase</button>
    <button className='btn btn-danger me-3 mt-3' onClick={clearText} >Clear Text</button>
    <button className='btn btn-danger me-3 mt-3' onClick={copyToClipboard(text)} >Copy to Clipboard</button>
  </div>
</div>
<div className="container mt-5">
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
