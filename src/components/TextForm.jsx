import React from "react";
import { useState } from "react";

const TextForm = ({ heading }) => {
    const [text, setText] = useState("Enter the text here");

    const handleOnchange = (event) => {
        console.log("Changed");
        setText(event.target.value);
    };

    function clickUpHandler() {
        let upText = text.toUpperCase();
        setText(upText);
    }

    function clickLoHandler() {
        let lowText = text.toLowerCase();
        setText(lowText);
    }

    function clickClearHandler() {
        setText("");
    }

    const copyHandler = () => {
        let copiedText = document.getElementById("myBox").value;
        navigator.clipboard.writeText(copiedText);
    };

    return (
        <>
            <div>
                <div className="container my-3">
                    <h1>{heading}</h1>
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnchange}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={clickUpHandler}>
                    Convert to upperCase
                </button>
                <button className="btn btn-primary mx-2" onClick={clickLoHandler}>
                    Convert to lowerCase
                </button>
                <button className="btn btn-primary mx-2" onClick={clickClearHandler}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-2" onClick={copyHandler}>
                    Copy Text
                </button>
            </div>
            <div className="container my-3">
                <h1>Your text summery</h1>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
};

export default TextForm;
