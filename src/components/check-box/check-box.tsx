import React from 'react';
import { useDrop } from 'react-dnd';

import Word from '../word';

import './check-box.scss';

interface CheckBoxProps {
  words: any[];
  markCheck: Function;
}

const CheckBox = (props: CheckBoxProps) => {
  const [collectedProps, drop] = useDrop({
    accept: 'word',
    drop: (item: any) => props.markCheck(item.id),
  });

  return (
    <div ref={drop} className="check-box">
      {props.words.map((el) => {
        return <Word key={el.id} id={el.id} word={el.content} />;
      })}
    </div>
  );
};

export default CheckBox;
