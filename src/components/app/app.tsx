import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Words from '../words';

import './app.scss';

const App = () => {
  const sentence = 'Посетители в ресторане заказали пиццу';

  const words = ['pizza', 'ordered', 'restaurant', 'customers', 'the', 'in'];

  return (
    <div className="app">
      <h1 className="app__header">Переведите предложение</h1>

      <div className="app__sentence">
        <p className="app__paragraph">{sentence}</p>
      </div>

      <DndProvider backend={HTML5Backend}>
        <div className="app__check">Check</div>

        <Words words={words} />
      </DndProvider>

      <h2 className="app__warning">Warning message!</h2>

      <button className="app__check-button">Check</button>
    </div>
  );
};

export default App;
