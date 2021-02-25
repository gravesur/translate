import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Words from '../words';
import CheckBox from '../check-box';
import Message from '../message';
import { saySentence } from '../../utils';
import { WordItem } from '../../types';

import './app.scss';

let sortTimer: any;

export const clearsortTimerTimeout = () => {
  clearTimeout(sortTimer);
};

const App = () => {
  const [checkWords, setCheckWords] = useState<WordItem[]>([]);
  const [uncheckWords, setUncheckWords] = useState<WordItem[]>([
    { id: 1, content: 'ordered' },
    { id: 2, content: 'in' },
    { id: 3, content: 'pizza' },
    { id: 4, content: 'the' },
    { id: 5, content: 'visitors' },
    { id: 6, content: 'cafe' },
  ]);
  const [isWrite, setIsWrite] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const writeSentenceArr = [
    'visitors',
    'in',
    'the',
    'cafe',
    'ordered',
    'pizza',
  ];

  const sentence = 'Посетители в кафе заказали пиццу';

  const sortWords = (word: WordItem) => {
    sortTimer = setTimeout(() => {
      if (uncheckWords.some((el: WordItem) => el.id === word.id)) {
        setUncheckWords([...uncheckWords].sort((a, b) => a.id - b.id));
      } else {
        setUncheckWords([...uncheckWords, word].sort((a, b) => a.id - b.id));
      }
    }, 500);
  };

  const writeCheck = (items: WordItem[]) => {
    setShowMessage(true);

    const isWrite = items.every(
      (el: WordItem, i: number) => el.content === writeSentenceArr[i]
    );

    if (isWrite && checkWords.length === writeSentenceArr.length) {
      setIsWrite(true);

      saySentence(writeSentenceArr.join(' '));
    } else {
      setIsWrite(false);
    }
  };

  const setCheck = (id: number) => {
    let word = uncheckWords.find((el: WordItem) => el.id === id);

    if (!word) {
      word = checkWords.find((el: WordItem) => el.id === id);
    }

    setCheckWords([
      ...checkWords.filter((el: WordItem) => el.id !== id),
      word!,
    ]);
    setUncheckWords(uncheckWords.filter((el: WordItem) => el.id !== id));
  };

  const setUncheck = (id: number) => {
    let word = checkWords.find((el: WordItem) => el.id === id);

    if (!word) {
      word = uncheckWords.find((el: WordItem) => el.id === id);
    }

    setUncheckWords([
      ...uncheckWords.filter((el: WordItem) => el.id !== id),
      word!,
    ]);
    setCheckWords(checkWords.filter((el: WordItem) => el.id !== id));
  };

  return (
    <div className="app">
      <h1 className="app__header">Переведите предложение на английский язык</h1>

      <div className="app__sentence">
        <p className="app__paragraph">{sentence}</p>
      </div>

      <DndProvider backend={HTML5Backend}>
        <CheckBox words={checkWords} setCheck={setCheck} />

        <Words
          words={uncheckWords}
          setUncheck={setUncheck}
          sortWords={sortWords}
        />
      </DndProvider>

      <Message isWrite={isWrite} showMessage={showMessage} />

      <button
        className="app__check-button"
        onClick={() => writeCheck(checkWords)}
      >
        Проверить
      </button>
    </div>
  );
};

export default App;
