import React from 'react';
import './App.css';
import Welcome from '../Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome />
      <section>
        Player name input
      </section>
      <section>
        This is the question board!
      </section>
      <section>
        This is where the questions get asked!!
      </section>
    </div>

  );
}

export default App;
