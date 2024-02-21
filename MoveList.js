import React, {useState, useEffect } from "react" ;
import MoveItem from './MoveItem'

const MoveList = () => {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    const fetchMoves = async () => {
      try {
        const response = await fetch ('http;//localhost:3001/moves');
        const data =await response.json();
        setMoves(data);
      } catch (error) {
        console.error('Error fetching moves:' , error);
      }
    };

    fetchMoves();
  }, [];

  return(
   <div>
    <h2>Jiu-Jitsu Moves</h2>
    <ul>
      {moves.map((move, index) => (
        <MoveItem key={index} move={move} />
      ))}
    </ul>
  </div>
  );
 }:
  
 export default MoveList;