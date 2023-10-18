import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";
const App = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="App">
      {[...Array(5)].map((_star, i) => {
        const currentRating = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className="star"
              size={80}
              color={currentRating <= (hover || rating) ? "yellow" : "grey"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(currentRating)}
              /* Expl */
            />
          </label>
        );
      })}
      <p>Rating is: {rating}</p>
    </div>
  );
};

export default App;

// /*
// Array(5) creates an array with a specified length of 5. However, the elements within this array are initially undefined, and it doesn't create a new array, it's just a single array with 5 undefined slots. It does not require the new keyword.

// [...Array(5)] takes the elements (in this case, the undefined slots) from the Array(5) and spreads them into a new array. So, it effectively creates a new array with 5 undefined values.
// */

/*


Suppose you are at inital render
everything is grey
now you hover over a star
=>onMouseEnter={() => setHover(currentRating)}
this means that setHoverValue is set to currentRating
this currentRating you get  by  when youmapover5 ele  and each
FaStar has itsown currentRating
so setHover lets  say has been set to 3
now color propis checked
color={currentRating <= (hover || rating) ? "yellow" : "grey"}
this means that 
sayyour  currentRating was 3
is 3 <=  hover?  
In the provided code snippet, when you initially hover over the 3rd star, the value of currentRating will be 3. This is because the currentRating variable is assigned the value of i + 1, where i is the index of the star in the array.

Regarding the hover state, it is initially set to null. When you hover over the 3rd star, the onMouseEnter event handler is triggered, and setHover(currentRating) is called. This means that the hover state will be updated to 3, which is the value of currentRating when hovering over the 3rd star.

Therefore, both currentRating and hover will have a value of 3 when you initially hover over the 3rd star.

is 3 <=  hover(3)?  now  yes
so set color to yellow

now for onClick
 onClick={() => setRating(currentRating)}
 when  you click now on component 4
 it will take hover first into consideration
 suppose you don't has hover 
 now rating was 3 when you hover(assume  you  clicked insteasd of hover)


 then color={currentRating <= (hover || rating) ? "yellow" : "grey"}
 means currentRating is 3  (already done above using hover(but you assume it was onclick))
 so is 3 <=4  (ignore hover||rating) only assume rating
 3<=4 yes
 that means the faStar of  map's 4th 3rd 2nd 1st valueshould be of yellow color
 now for 5 star of map
 its currentValue is 5
 but rating is 4
 so 4<=5 ,=>no so color is yellow
 
*/

/*
Hindi:
  agar currentrating jo hai for eg of 3rd box is less than rating suppose humne 2  box select lkiye hai
  agar  currRating jo hai 3
  is less than 2
   this is not  true
  so us faStar  ko karu grey color
  warna yellow
  short mai  rating ke neeche jitne bhi current rating ayegina ek ek map se unko karyu yellow
*/
