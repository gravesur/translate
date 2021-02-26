import React from 'react';

import './message.scss';

interface MessageProps {
  isWrite: boolean;
  showMessage: boolean;
}

const Message = ({ isWrite, showMessage }: MessageProps) => {
  let classes = 'message';

  if (!showMessage) return <h2 className={classes}></h2>;
  else classes += ' message--show';

  if (isWrite) classes += ' message--write';
  else classes += ' message--false';

  return <h2 className={classes}>{isWrite ? 'Правильно!' : 'Неправильно!'}</h2>;
};

export default Message;
