import React from 'react';

const Button = (props) => {
  return (
    <button style={props.style} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;


// import React, { useState } from 'react';
// import Button from './Button';

// function App() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <Button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => setCounter(counter + 1)}>
//         Click me
//       </Button>
//       <p>You have clicked the button {counter} times.</p>
//     </div>
//   );
// }

// export default App;