import React from 'react';
import './App.css'; // Ensure this path is correct
import GroceriesApp from './components/GroceriesApp';

function App() {
  return (
    <div className="App">
      <h1>Groceries App</h1> {/* Add this line for the title */}
      <GroceriesApp />
    </div>
  );
}

export default App;
