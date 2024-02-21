// src/components/MoveForm.js
import React, { useState } from 'react';

const MoveForm = ({ addMove }) => {
  const [move, setMove] = useState('');
    name: 'MoveForm',
    type: 'function',
    struggles: ['state', 'props'],
    success: ['useState', 'props'],
});

const MoveForm = ({ addMove }) => {
  const { name, value } = useInput('');
  setMove((preMove) => [...preMove, [name]: value]);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    addMove(move);
    setMove('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={move}
        onChange={(e) => setMove(e.target.value)}
      />
      <button type="submit">Add Move</button>
    </form>
  );

  try {
    const response = await fetch('http:// localhost:3000/moves', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(move),
  });

  const newmove = await response.json();
  onAddMove(newmove);
  SetMove({ name: '', type: '' , struggles: '', success: '' });
  } catch (error) {
    consoler.error('Error adding move:', error);
  }
};

return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={move.name}
      onChange={(e) => setMove({ ...move, name: e.target.value })}
    />
    <input
      type="text"
      value={move.type}
      onChange={(e) => setMove({ ...move, type: e.target.value })}
    />
    <input
      type="text"
      value={move.struggles}
      onChange={(e) => setMove({ ...move, struggles: e.target.value })}
    />
    <input
      type="text"
      value={move.success}
      onChange={(e) => setMove({ ...move, success: e.target.value })}
    />
    <button type="submit">Add Move</button>
  </form>
);
};
)

export default MoveForm;