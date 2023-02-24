import "./styles.css";
import React, { useState } from "react";
var foodDictionary = {
  "🍕": "Pizza",
  "🍔": "Burgiieeer",
  "🌭": "HotDog",
  "🍿": "Popcorn",
  "🥪": "Sandwich",
  "🧀": "Cheese",
  "🍚": "Rice",
  "🍤": "Prawn",
  "🍨": "IceCream",
  "🍫": "Choclate",
  "🍹": "Cocktail",
  "🥟": "Momos"
};

var foodweknow = Object.keys(foodDictionary);
export default function App() {
  const [dish, setdish] = useState("");
  function food(event) {
    var userInput = event.target.value;
    var meaning = foodDictionary[userInput];
    setdish(meaning);
  }
  function disheslove(dishes) {
    var meaning = foodDictionary[dishes];
    setdish(meaning);
  }
  return (
    <div className="App">
      <h1>
        Select your favourite{" "}
        <span style={{ fontStyle: "italic" }}>Cuisine</span>
      </h1>
      <input className="box" onChange={food}></input>
      <div
        style={{
          fontStyle: "italic",
          fontWeight: "bold",
          marginBottom: "3rem"
        }}
      >
        Hey! This is {dish}
      </div>
      {foodweknow.map(function (dishes) {
        return (
          <span className="spann" onClick={() => disheslove(dishes)}>
            {dishes}
          </span>
        );
      })}
    </div>
  );
}
