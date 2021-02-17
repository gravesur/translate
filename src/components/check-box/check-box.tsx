import React from 'react';
import { useDrop } from 'react-dnd';

import Word from '../word';

import './check-box.scss';

interface CheckBoxProps {
  //draggedItems: any[];
  words: any[];
  //setDraggedItems: Function;
  markCheck: Function;
}

const CheckBox = (props: CheckBoxProps) => {
  const [collectedProps, drop] = useDrop({
    accept: 'word',
    //drop: (item: any) => props.setDraggedItems([...props.draggedItems, item]),
    drop: (item: any) => props.markCheck(item.id),

    // collect: (monitor) => {
    //   isOver: !!monitor.isOver();
    // },
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
