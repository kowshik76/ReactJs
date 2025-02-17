import React,{useState} from 'react'

export default function TextInput(props) {
  const redundantSpace=()=>{
    let NewText=text.split(/[ ]+/);
    setText(NewText.join(" "));
    props.ShowAlert("Deleted Redundant Spaces !!","success");
  }
    const clickToClear=()=>{
        setText("");
        props.ShowAlert("Text is Cleared !!","success");

    }
    const clickToLower=()=>{
        let text2=text.toLowerCase();
        setText(text2);
        props.ShowAlert("Converted into LowerCase!!","success");

    }
 
    const clickToUpper=()=>{
       let text1=text.toUpperCase();
       setText(text1);
       props.ShowAlert("Converted into UpperCase!!","success");

    }
    const handleOnChange=(event)=>{
        console.log("OnChange");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
  return (
    <>
    <div className="container">
  <h1> {props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'Light'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={clickToUpper}>To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={clickToLower}>To Lower Case</button>
<button className="btn btn-primary mx-2" onClick={clickToClear}>Clear</button>
<button className="btn btn-primary mx-2" onClick={redundantSpace}>Extra Space Remover</button>
    </div>
    <div className="container my-3">
        <h1>
            Your Text summary!!
        </h1>
        <p>
            {text.split(" ").length-1} Words and {text.length} Characters !!
        </p>
        <h2>Preview of Your Text!!</h2>
        <p>{text.length>0?text :"Enter the text in the textbox for preview!!"}</p>
    </div>
    </>
  )
}
