import React from "react";
import PropTypes from "prop-types";

function Food({name, picture, rating}) {

  return (
  <div>
  <h2>I like {name}</h2>
  <h3>rating: {rating}</h3>
  <img src={picture} />
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    
  name: "1hestia",
  image:
    "https://ww.namu.la/s/e74a85f268e8c1cfdbbe26aff491eaca7d770b150a0d8a836db045d1b95d880748a311edcc360c86fddecd7489554361d322c5b931017c5993239dc73f7e3256bd0a90475edaa6fa5997de9834f7cd0f6e0465b59e2454553f1f5a9796eb1dee"
    ,rating: 5
  },
{
  
  name: "2hestia",
  image:
   "https://trees.gamemeca.com/wp-content/uploads/2018/11/181107_danmemo_danmemoassist_%ED%99%94%EB%A1%9C%EC%9D%98-%EC%97%AC%EC%8B%A0-%ED%97%A4%EC%8A%A4%ED%8B%B0%EC%95%84.jpg"
   ,rating: 10

  },

{
 
  name: "3hestia",
  image:
   "https://data.onnada.com/character/201504/991326802_740de1e8_8BB0EC958429.jpg"
   ,rating: 9

  },

{
 
  name: "4hestia",
  image:
   "https://data.onnada.com/character/201907/237746802_c2a63dd7_8BB0EC958429.png"
   ,rating: 100
},

{
  
  name: "5hestia",
  image:
   "https://pbs.twimg.com/media/ELmxluNUwAAR1sa.jpg"
   ,rating: 999
}

];

function App() {
  return (
    <div >
     
     {foodILike.map(dish => ( 
        <Food name={dish.name} picture={dish.image} rating={dish.rating} />
     ))}

    </div>
  );
}

export default App;
