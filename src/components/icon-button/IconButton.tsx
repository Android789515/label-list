import { type MouseEvents } from 'types';

import defaultStyles from './IconButtonDefaults.module.css';

import { Button } from 'components/button';

interface Props {
  name: string;
  text?: string;
  icon: string;
  buttonStyles?: string;
  iconStyles?: string;
  mouseEvents?: MouseEvents;
}

export const IconButton = ({ name, text, icon, buttonStyles, iconStyles, mouseEvents }: Props) => {
  return (
    <Button
      text={''}
      customStyles={`
        ${text && defaultStyles.buttonWithText}
        ${buttonStyles}
      `}
      mouseEvents={mouseEvents}
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
    </Button>
  );
};
