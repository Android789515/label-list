import { type ReactNode } from 'react';

import { type MouseEvents } from 'types';

import defaultStyles from './ButtonDefaults.module.css';

interface Props {
  id?: string;
  text: string;
  download?: {
    name: string;
    url: string;
  };
  customStyles?: string;
  mouseEvents?: MouseEvents;
  children?: ReactNode;
}

export const Button = ({ id, text, download, customStyles, mouseEvents, children }: Props) => {
  if (download) {
    return (
      <a
        href={download.url}
        download={download.name}
        className={`
          ${defaultStyles.button}
          ${customStyles}
        `}
        id={id}
        {...mouseEvents}
      >
        {text}

        {children}
      </a>
    );
  } else {
    return (
      <button
        className={`
          ${defaultStyles.button}
          ${customStyles}
        `}
        id={id}
        {...mouseEvents}
      >
        {text}
  
        {children}
      </button>
    );
  }
};
