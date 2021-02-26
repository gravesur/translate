import React, { useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { wrapGrid } from 'animate-css-grid';

import Word from '../word';
import { WordItem } from '../../types';
import { clearsortTimerTimeout } from '../app/app';

import './words.scss';

interface WordsProps {
  words: WordItem[];
  sortWords: Function;
  setUncheck: Function;
}

const Words = (props: WordsProps) => {
  const ref = useRef(null);

  useEffect(() => {
    wrapGrid(ref.current!, {
      easing: 'easeInOut',
      stagger: 0,
      duration: 300,
    });
  }, []);

  const [, drop] = useDrop({
    accept: 'word',
    drop: (item: any) => {
      clearsortTimerTimeout();

      if (props.words.length < 6) {
        props.setUncheck(item.id);

        props.sortWords(item);
      }
    },
  });

  const items = props.words.map(({ id, content }: WordItem) => {
    return <Word key={id} id={id} word={content} />;
  });

  return (
    <div ref={drop}>
      <div ref={ref} className="words">
        {items}
      </div>
    </div>
  );
};

export default Words;
