import React from 'react';
import { useDrag } from 'react-dnd';

import './word.scss';

interface WordProps {
  word: string;
  id: number;
}

const Word = ({ word, id }: WordProps) => {
  const [, drag] = useDrag({
    item: {
      type: 'word',
      id,
      content: word,
    },
  });

  return (
    <div ref={drag} className="word">
      {word}
    </div>
  );
};

export default Word;
