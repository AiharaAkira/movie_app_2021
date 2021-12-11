import ReactDOM from "react-dom";
import React from "react";
import { useState, useEffect } from "react";


function Hello(){
   
    useEffect(function(){
        console.log("create :)");
        return function(){
            console.log("destroyed :(");
        }
    }, []);
        
      
    return <h1>hello</h1>;
}

function App3() {
   const [showing, setShowing] = useState(false);

   const onClick = () => setShowing((prev) => !prev);
    return (


        <div>
            {showing ? <Hello /> : null}    
            <button onClick={onClick}>{showing ? "hide" : "show"}</button>
        </div>
    )
}

export default App3;
