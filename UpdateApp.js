 import React from 'react';
 import MoveList from './components/MoveList';
 import MoveForm from './components/MoveForm';
 import'./App.css';

 function App() {
  const addMove = (newMove) => {
    setMoves([...moves, newMove]);
  };
  return (
    <div className="container">
      <h1>Jiu-Jitsu Move Catalog</h!>
      <MoveForm onAddMove={addMove} />
      <MoveList />
    </div>
  );
}

export default App;