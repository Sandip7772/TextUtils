import  { useState } from "react"

export default function TextForm(props) {
const HandleUpCase = ()=>{
  console.log("HandleUpCase is clicked" );
  let NewText = Text.toLocaleUpperCase();
  setText(NewText);
}
const HandleClear = ()=>{
  console.log("HandleUpCase is clicked" );
  let NewText ="";
  setText(NewText);
}

const HandleChange = (event)=>{
  setText(event.target.value);
}
const HandleLCase = ()=>{
  console.log("Convert to Lowercase is clicked");
  let NewText = Text.toLocaleLowerCase();
  setText(NewText);
}
  const [Text, setText] = useState("");

  return (
    <>
<div className='container' style={{color: props.mode==='dark'? 'white':'black'}} >
 <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'? 'rgb(33, 52, 78)':'white',
  color: props.mode==='dark'? 'white':'black'}} id="exampleFormControlTextarea1" value={Text} onChange={HandleChange} rows="8"></textarea>
 </div>
<button disabled={Text.length===0} className='btn btn-primary mx-1 my-1' onClick={HandleUpCase}>Convert To UpperCase</button>
<button disabled={Text.length===0}  className='btn btn-info mx-1 my-1'  onClick={HandleLCase}>Convert To LowerCase</button>
<button disabled={Text.length===0}  className='btn btn-info mx-1 my-1' onClick={HandleClear}>Clear All</button>
</div>

<div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
  <h2>Your Text Summary:</h2>
  <p >{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} Characters.</p>
  <p>{(0.008)* Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read.</p>

  <h3 >Preview of Above text:</h3>
  <p>{Text.length>0?Text:"Nothing to preview."}</p>

</div>

    </>
  )
}
