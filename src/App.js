import { useState } from "react";
import { data } from "./data";
import "./App.css";

function App() {
  const [gifts, setGifts] = useState(data);
  // console.log(data) - console.log to see all elements from array data.js

  const removeGift = (id) => {  // remove each element of array using filter method
  //  console.log(id) to check id elements - click on the button to see id of this element
    let newGifts = gifts.filter(gift => gift.id !== id); 
  //  console.log(newGifts) to check new array with filtered elements
  setGifts(newGifts);
  }

  return (
    <div>
      <div className="container">
        <h1>List of {gifts.length} gifts</h1>
        {/* to see the length of array from data.js */}
      </div>

      {gifts.map((element) => { // display elements using map method
        const { id, gifty, image } = element;

        return(
          <div key={id}> {/* remove the error in the console that each element need to have an id */}
            <div className="container">  
              <h2>{id} - {gifty}</h2> {/* display each element of array */}
            </div>

            <div className="container">
              <img src={image} width='300px'/>
            </div>

            <div className="container">
              <button onClick={() => removeGift(id)}>remove</button>
            </div>
          </div>
        )
      })}
      <div className="container">
        <button onClick={() => setGifts([])}>delete all</button>
      </div>
    </div>
  );
}

export default App;
