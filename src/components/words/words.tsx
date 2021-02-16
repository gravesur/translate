import React from 'react';

import './words.scss';

interface WordsProps {
  words: string[];
}

const Words = (props: WordsProps) => {
  let id = 0;

  const items = props.words.map((el) => {
    id++;

    return (
      <div className="words__item" key={id}>
        {el}
      </div>
    );
  });

  return <div className="words">{items}</div>;
};

export default Words;
