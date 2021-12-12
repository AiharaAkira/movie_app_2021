import React from "react";


//import styles from "./App.module.css";

import Movie from "./Movie"




class App extends React.Component{

  

  state = {

    count: 0
  };

  add = () => {
    console.log('add');
  };

  minus = () => {
    console.log('add');
  };

  render(){
    return (

      <div>
        <Movie />

      </div>
    )
  }

}

export default App;
