
import React, {useState} from 'react'



export default function TextForm(props)
{
    //called when the ConvertToUpperCase Button is pressed
    const handleUpperCaseClick = ()=>
    {
        let newText= text.toUpperCase();
        // setText("You have clicked on handleUpperCaseClick");
        setText(newText);
        props.showAlert("Converted to UpperCase", "Success");
    }
    const handleLowerCaseClick = ()=>
    {
        let newText= text.toLowerCase();
        // setText("You have clicked on handleUpperCaseClick");
        setText(newText);
    }

    //to be able to write in the text area, we set the text in the textarea to the current state of text
    //which is value = {text}
    const handleOnChange = (event) =>
     { 
         setText(event.target.value)
     }
     const handleDownload = () =>
     {
        const fileName= "MyText.txt";
        const element=document.createElement('a');
        //when user clicks the button the browser will treat the anchor tag as a link
        // and attemot to download the content specified by the href attribute
        element.setAttribute('href', 'data:text/plain;chrset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', "myText.txt");
        element.style.display='none';
        document.body.appendChild(element);

        element.click();//telling the browser to treat the dynamically created anchor link 
        //as if it has been clicked by the user. This triggers the download process and
        // prompts the browser to download the specified content
        
        document.body.removeChild(element);

     }
    const [text,setText] = useState('');
    // setText("NewText")
    return (
        <>
    <div>
    <h1 style={{color: (props.mode=='bg-light')?'black':'white'}}>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: 'white', color:
 'black'}} id="myBox" rows="5"> </textarea>
    </div>
    <button className="btn btn-primary mx-3" style={{backgroundColor: props.mode=='bg-light'?'black':'white', color: props.mode=='bg-light'?'white':'black'}} onClick={handleUpperCaseClick}><b>Convert to UpperCase</b></button>
    <button className="btn btn-primary mx-3" style={{backgroundColor: props.mode=='bg-light'?'black':'white', color: props.mode=='bg-light'?'white':'black'}} onClick={handleLowerCaseClick}><b>Convert to LowerCase</b></button>
    <button className="btn btn-primary mx-3" style={{backgroundColor: props.mode=='bg-light'?'black':'white', color: props.mode=='bg-light'?'white':'black'}} onClick={handleDownload}><b>Download</b></button>
    </div>
    <div className="container my-4" style={{color:props.mode=='bg-light'?'black':'white'}}> 
    <h2>Your text summary</h2>
    <p> {text.trim()==""?0:text.trim().split(" ").length} words {text.length} characters</p>
    <p> {0.008 * text.split(" ").length} minutes Read</p>
    <h2>Preview</h2>
    <p>{text==""?'Enter something to manipulate':text}</p>

    </div>
    </>
      )
}