import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("On click")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase", "success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lowerCase', 'success')
    }
    const handleStripClick = ()=>{
        let newText = text.trim();
        setText(newText)
        props.showAlert('Whitespace removed', 'success')
    }
    const handleSpClick = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra space removed', 'success')
    }
    const handleCoClick = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert('Text copied', 'success')
    }

    const handleclearClick = ()=>{
        setText('')
    }


    const handleOnChange = (event)=>{
        // console.log("on Change")
        setText(event.target.value)
    }

    const [text, setText] = useState('')


    return (
        <>
         

        <div className="container my-3" style={{color: props.mode==='light'?'black':'white', }}>
            <h4>{props.heading}</h4>
           <div className="mb-3">
           <textarea style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'white':'#212529', }} name="text-box" id="text-box" rows="10" value={text} placeholder="Enter here..." onChange={handleOnChange} className="form-control"></textarea>
           </div>
            <div className="mb-3">
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light'?'primary':'success'} mx-2 my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light'?'primary':'success'} mx-2 my-2`} onClick={handleLoClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light'?'primary':'success'} mx-2 my-2`} onClick={handleStripClick}>Remove whiteSpaces</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light'?'primary':'success'} mx-2 my-2`} onClick={handleSpClick}>Remove extra spaces</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light'?'primary':'success'} mx-2 my-2`} onClick={handleCoClick}>Copy Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light'?'primary':'success'} mx-2 my-2`} onClick={handleclearClick}>Clear</button>
            </div>
        </div>
       
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white', }}>
            <h4 className="text-center">Text Summary</h4>
            <div className="row">
            <div className="col-md-4">
            <div className="mx-2 my-2">
            <div className="card card-body" id="word-count">
                <h5 className="card-title text-center">Word Count</h5>
                <h6 className="card-text text-center">{text.split(/\s+/).filter((elem)=>{return elem.length !== 0}).length}</h6>

            </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="mx-2 my-2">
           <div className="card card-body" id="character-count">
                <h5 className="card-title text-center">Character Count</h5>
                <h6 className="card-text text-center">{text.length}</h6>
            </div>
           </div>
            </div>
            <div className="col-md-4">
            <div className="mx-2 my-2">
           <div className="card card-body" id="reading-time">
                <h5 className="card-title text-center">Reading Time</h5>
                <h6 className="card-text text-center">{text.split(/\s+/).filter((elem)=>{return elem.length !== 0}).length*0.008} minutes</h6>
            </div>
           </div>
            </div>
           
           
            </div>
            
        </div>

        <div className="container my-5" style={{color: props.mode==='light'?'black':'white', }}>
            <h4 className="text-center">Preview</h4>
            <p className="text-center">{text.length>0?text:'Enter text to above box to preview here'}</p>
        </div>
        </>
    )
}
