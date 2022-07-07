// import React, { useState } from 'react';

// const App = () => {
//     const [counter, setCounter] = useState(0);
//     const incrementCounter = () => {
//         setCounter(counter + 1)
//     }
//     return(
//         <div>
//            Counter  {counter}
//            <button onClick={incrementCounter}> Increment </button>
//         </div>
//     );
// }

// export default App;

// import React, { useState } from "react";
// const App = () => {
//   const [additionCount, setAdditionCount] = useState(0);
//   const [subtractionCount, setSubtractionCount] = useState(0);

//   console.log("Component Rendering");

//   const handleOnClick = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
//       setAdditionCount(additionCount + 1);
//       setSubtractionCount(subtractionCount - 1);
//     });
//   };

//   return (
//     <div>
//       <button
//         style={{ width: "50%", height: "30%" }}
//         onClick={() => {
//           handleOnClick();
//         }}
//       >
//         Click Me!
//       </button>
//       <div>Add Count: {additionCount}</div>
//       <div>Substraction Count: {subtractionCount}</div>
//     </div>
//   );
// };
// export default App;

import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  console.log("React 18 Application Re-Rendering");
  // click event
  const handleClick = () => {
    // 1 Re-Render
    setClicked(!clicked);
    setCount(count + 1);
  };

  // async operation
  const handleAsyncClick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
      // trigger 1 re-render due to React 18 Improved Batching
      setClicked(!clicked);
      setCount(count + 1);
    });
  };

  // timeout/interval
  const handleTimeOutClick = () => {
    setTimeout(() => {
      // trigger 1 re-render due to React 18 Improved Batching
      setClicked(!clicked);
      setCount(count + 1);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div> Count: {count} </div>
        <div> Clicked: {clicked} </div>
        <button onClick={handleClick}> Event Handler </button>
        <button onClick={handleAsyncClick}> Async Handler </button>
        <button onClick={handleTimeOutClick}> Timeout Handler </button>
      </header>
    </div>
  );
};

export default App;
