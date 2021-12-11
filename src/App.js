import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import styles from "./App.module.css";
import App2 from "./App2"
import App3 from "./App3"




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
        <App3 />
        <App2 />
        <h1 className={styles.title}>hello world</h1>
        <Button text="Continue" />
      <h1>the number :  {this.state.count}</h1>
      <button onClick={this.add()}>Add</button>
      <button onClick={this.minus()}>Minus</button>
      </div>
    )
  }

}

export default App;
