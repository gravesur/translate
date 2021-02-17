import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Words from '../words';
import CheckBox from '../check-box';
import { saySentence } from '../../helper-functions';

import './app.scss';

const App = () => {
  const [words, setWords] = useState([
    { id: 1, content: 'pizza', status: 'uncheck' },
    { id: 2, content: 'ordered', status: 'uncheck' },
    { id: 3, content: 'restaurant', status: 'uncheck' },
    { id: 4, content: 'customers', status: 'uncheck' },
    { id: 5, content: 'the', status: 'uncheck' },
    { id: 6, content: 'in', status: 'uncheck' },
  ]);
  const [message, setMessage] = useState('');

  const writeSentenceArr = [
    'customers',
    'in',
    'the',
    'restaurant',
    'ordered',
    'pizza',
  ];

  const sentence = 'Посетители в ресторане заказали пиццу';

  const checkWords = words.filter((el) => el.status === 'check');

  const writeCheck = (items: any) => {
    const isWrite = items.every(
      (el: any, i: number) => el.content === writeSentenceArr[i]
    );

    if (isWrite && checkWords.length === writeSentenceArr.length) {
      setMessage('Правильно!');

      saySentence(writeSentenceArr.join(' '));
    } else {
      setMessage('Неправильно!');
    }

    // isWrite && checkWords.length === writeSentenceArr.length
    //   ? setMessage('Правильно!')
    //   : setMessage('Неправильно!');
  };

  //console.log(writeCheck(words.filter((el) => el.status === 'check')));

  const markCheck = (id: number) => {
    const word = words.find((el) => el.id === id);

    word!.status = 'check';

    setWords(words.filter((el) => el.id !== id).concat(word!));
  };

  const markUncheck = (id: number) => {
    const word = words.find((el) => el.id === id);

    word!.status = 'uncheck';

    setWords(words.filter((el) => el.id !== id).concat(word!));
  };

  //const words = ['pizza', 'ordered', 'restaurant', 'customers', 'the', 'in'];

  //setDraggedItems(['1', 2, 3, 4, 5]);

  return (
    <div className="app">
      <h1 className="app__header">Переведите предложение на английский язык</h1>

      <div className="app__sentence">
        <p className="app__paragraph">{sentence}</p>
      </div>

      <DndProvider backend={HTML5Backend}>
        <CheckBox
          words={words.filter((el) => el.status === 'check')}
          markCheck={markCheck}
        />

        <Words
          words={words.filter((el) => el.status === 'uncheck')}
          markUncheck={markUncheck}
        />
      </DndProvider>

      <h2
        className="app__message"
        style={
          message === 'Правильно!' ? { color: 'forestgreen' } : { color: 'red' }
        }
      >
        {message}
      </h2>

      <button
        className="app__check-button"
        onClick={() => writeCheck(words.filter((el) => el.status === 'check'))}
      >
        Check
      </button>
    </div>
  );
};

export default App;
