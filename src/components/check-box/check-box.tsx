import React from 'react';
import { useDrop } from 'react-dnd';

import Word from '../word';
import { WordItem } from '../../types';

import './check-box.scss';

interface CheckBoxProps {
  words: WordItem[];
  setCheck: Function;
}

const CheckBox = (props: CheckBoxProps) => {
  const [, drop] = useDrop({
    accept: 'word',
    drop: (item: any) => {
      if (props.words.length < 6) {
        props.setCheck(item.id);
      }
    },
  });

  return (
    <div ref={drop} className="check-box">
      <div className="line"></div>
      {props.words.map((el: WordItem) => {
        return <Word key={el.id} id={el.id} word={el.content} />;
      })}
    </div>
  );
};

export default CheckBox;
