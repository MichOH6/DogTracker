import React from 'react';
import './App.css';
import Calendar from './Calendar';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React TypeScript App</h1>
      </header>
      <main>
        <Calendar></Calendar>
      </main>
    </div>
  );
}

export default App;
