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


 //add moves for the catalog and make sure they match everything being done attempt to make add images as well so that they can be used with moves and complete everything properly reach out to rryan to complete this as well in all the list include names of moves in japanese and portugese so that they can see each other without any problems and be able to comunicate equally without any issues if the move is called in any language it will identify them without any issues and 