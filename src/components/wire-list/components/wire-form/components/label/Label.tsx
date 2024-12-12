import { type ReactNode } from 'react';

import styles from './Label.module.css';

interface Props {
  text: string;
  children: ReactNode;
}

export const Label = ({ text, children }: Props) => {
  return (
    <label
      className={styles.label}
    >
      <span
        className={styles.labelText}
      >
        {text}
      </span>

      {children}
    </label>
  );
};
