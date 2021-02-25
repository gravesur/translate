import React from 'react';

import './message.scss';

interface MessageProps {
  message: string;
}

const Message = ({ message }: MessageProps) => {
  return (
    <h2
      className="message"
      style={
        message === 'Правильно!' ? { color: 'forestgreen' } : { color: 'red' }
      }
    >
      {message}
    </h2>
  );
};

export default Message;
