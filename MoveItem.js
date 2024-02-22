import React from "react';

const MoveItem =({ move }) => {
  return (
   <li>
      <strong>{move.name}</strong> -type {move. type},Struggles: {move.struggles}, Success: {move.success}
   </li> 
  );
  };

  
  export default MoveItem;
  


