import React from 'react';
import './styles/App.css';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Welcome!
        </p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
      <Landing />
    </div>
  );
}

export default App;
