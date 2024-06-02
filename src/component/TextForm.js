import React, {useState} from 'react'


export default function TextForm(props) {

    const handleOnchange = (event) => {
        console.log("onchange was clicked!");
        setText(event.target.value);
    }

    const handleUppCase = () => {
        console.log("upper case was clicked!")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () =>{
        setText("");
    }

    const handleCopyText = () => {
       var text =  document.getElementById("mybox")
       text.select();
       navigator.clipboard.writeText(text.value);
    }

    const handleSpace = () => {
        let newText = text.split(/\s+/);
        if(newText.length === 1 && newText[0] === ""){
            setText("");
        }else{
            setText(newText.join(" "));
        }
        
    }

    const [text, setText] = useState("");
    
    return (
        <>
        <div>
            <h5 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h5>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode === 'dark' ? '#112335' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-2' onClick={handleUppCase}> Convert to UpperCase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowerCase}> Convert to LoweCase</button>
            <button className='btn btn-primary mx-1' onClick={handleClear}> Clear Text</button>
            <button className='btn btn-primary mx-1' onClick={handleCopyText}> Copy Text </button>
            <button className='btn btn-primary mx-1' onClick={handleSpace}> Remove Space </button>
            {/* <button className='btn btn-primary mx-1'> Compile Text</button> */}
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h4>Your Text summary</h4>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
        </>
    )
}
