import React from 'react';

import './app.scss';

const App = () => {
  const sentence = 'Посетители в ресторане заказали пиццу';

  return (
    <div className="app">
      <h1 className="app-header">Translate this sentence</h1>
      <div className="app-sentence">
        <p className="app-paragraph">{sentence}</p>
      </div>
      <div className="app-check">Check</div>
      <div className="app-words"></div>
      <h2 className="app-warning">Warning message!</h2>
      <button className="app-check-button">Check</button>
    </div>
  );
};

export default App;
