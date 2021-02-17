import React from 'react';
import { useDrop } from 'react-dnd';

import Word from '../word';

import './words.scss';

interface WordsProps {
  words: any[];
  markUncheck: Function;
}

const Words = ({ words, markUncheck }: WordsProps) => {
  //let id = 0;

  const [collectedProps, drop] = useDrop({
    accept: 'word',
    drop: (item: any) => markUncheck(item.id),
  });

  const items = words.map((el) => {
    //id++;

    return <Word key={el.id} id={el.id} word={el.content} />;
  });

  return (
    <div ref={drop} className="words">
      {items}
    </div>
  );
};

export default Words;
