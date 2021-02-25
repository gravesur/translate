import React from 'react';

import './message.scss';

interface MessageProps {
  isWrite: boolean;
  showMessage: boolean;
}

const Message = ({ isWrite, showMessage }: MessageProps) => {
  if (!showMessage) return null;

  let classes = 'message';

  if (isWrite) classes += ' message--write';
  else classes += ' message--false';

  return <h2 className={classes}>{isWrite ? 'Правильно!' : 'Неправильно!'}</h2>;
};

export default Message;
