
import { useState, useEffect } from "react";

function App2() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("i run all the time");

    useEffect(() => {

        console.log("IrunOnlyOnce");
    }, []);

    useEffect(() => {
        
            console.log("Irun keyword Changes");
        
    }, [keyword]);
    
    useEffect(() => {
       
        console.log("Irun counter Changes");

    }, [counter]);

    useEffect(() => {
       
        console.log("Irun counter&keyword Changes");

    }, [counter, keyword]);

    return (

        <div>
            <input value={keyword}
                onChange={onChange}
                type="text"
                placeholder="seach" />
            <button onClick={onClick}>click me</button>
            <h1>{counter}</h1>
        </div>
    )
}

export default App2;
