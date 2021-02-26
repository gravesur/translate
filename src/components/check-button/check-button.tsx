import React from 'react';

import './check-button.scss';

interface CheckButtonProps {
  isButtonClicked: boolean;
  onCheckButtonClicked: Function;
}

const CheckButton = ({
  onCheckButtonClicked,
  isButtonClicked,
}: CheckButtonProps) => {
  console.log(isButtonClicked);

  let classes = 'check-button';

  if (isButtonClicked) classes += ' check-button--clicked';

  return (
    <button className={classes} onClick={() => onCheckButtonClicked()}>
      Проверить
    </button>
  );
};

export default CheckButton;
