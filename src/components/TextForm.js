import React, { useState } from 'react'//For Using The State We Must Be Import The State Using "{useState}"

export default function TextForm(props) { //This Argument Pass Into The Function Componand That Is Props.

    //This Is a Event Listner "Onclick".
    // Convert To UperCase Function
    const handelUpClick = () => {
        // console.log("UperCase Was clicked Kamlesh" + text); it Just For Debuging
        let newtext = text.toUpperCase();
        // setText("Kamlesh You Change The Value Of Text.");
        setText(newtext);
        props.showAlert("Converted To Upercase!", "Success");
    }
    // Convert To LowerCase Function 
    const handelLoClick = () => {
        let newtext2 = text.toLowerCase();
        setText(newtext2);
        props.showAlert("Converted To Lowercase!", "Success");

    }

    // Cleare Text Function 
    const handelclearClick = () => {
        let clr = "";
        setText(clr);
    }

    // Copy Text Function 
    const handelcopyClick = () => {
        var text = document.getElementById("my-Box");
        text.select();
        // text.setSelectionRange(0, 9999); not Important
        navigator.clipboard.writeText(text.value);
    }

    //Space Remove Functions
    const handelRemoveClick = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    //And This Is a When User Wants To Some Change In There Text Then This Function Will Run. 
    const handelOnChange = (event) => {
        // console.log("On Change"); it Just For Debuging
        setText(event.target.value);
    }

    // This Is a State Decleration syntax:- const[count, setcount(it Is Function To Update)] = useState(0)
    const [text, setText] = useState("")//This Is a Defoult Value That Is "Enter Text Here kamlesh". 

    //***To change The State value Use "setState = ("New Text") ***/

    //****** This Is My Logic :) *****
    // let words = text.split(" ").length;
    // let charectors = text.length;
    return (
        <>
            <div className='container my-5' >
                {/* This Is Props Import From The App.Js File  */}
                <h3>{props.heading} </h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="my-Box" rows="8"></textarea>
                    {/* This "disabled={text.length === 0}" To Disable The Buttons when ever some Content Are Not Defined Into The Box  */}
                    <button disabled={text.length === 0} className="btn btn-primary" onClick={handelUpClick}>Convert To UperCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handelLoClick}>Convert To LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handelclearClick}>Clear</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handelcopyClick}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handelRemoveClick}>Remove Extra Spesess</button>

                </div>
            </div>

            <div className="container">
                <h3>Your Text Summary</h3>
                {/* <p>{words} words {charectors} charectors</p>
                <p>{0.008 * words}Minutes To read This Words.</p> */}
                {/***** This Is My Logic  *****/}
                {/* <p>{text.split(" ").length - 1} words {text.length} charectors</p> */}
                {/***** Harrys Logic *****/}
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words {text.length} charectors</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}Minutes To read This Words.</p>
                <h3>Summary</h3>
                <p>{text.length > 0 ? text : "Enter Somthing To Privew"}</p>
            </div>
        </>
    )
}
