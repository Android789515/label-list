import { MouseEvent } from 'react';

import defaultStyles from './IconButtonDefaults.module.css';

interface Props {
  name: string;
  text?: string;
  icon: string;
  buttonStyles?: string;
  iconStyles?: string;
  onClick: (event: MouseEvent) => void;
}

export const IconButton = ({ name, text, icon, buttonStyles, iconStyles, onClick }: Props) => {
  return (
    <button
      className={`
        ${defaultStyles.button}
        ${text && defaultStyles.buttonWithText}
        ${buttonStyles}
      `}
      onClick={onClick}
    >
      {text && (
        <span>
          {text}
        </span>
      )}
      <img
        src={icon}
        alt={name}
        className={iconStyles}
      />
    </button>
  );
};
