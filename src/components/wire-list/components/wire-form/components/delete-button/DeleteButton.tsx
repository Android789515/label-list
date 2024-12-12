import { MouseEvent } from 'react';

import deleteIcon from './assets/delete.svg';
import styles from './DeleteButton.module.css';

interface Props {
  onClick: (event: MouseEvent) => void;
}

export const DeleteButton = ({ onClick }: Props) => {
  return (
    <button
      className={styles.deleteButton}
      onClick={onClick}
    >
      <img
        src={deleteIcon}
        alt='Delete'
      />
    </button>
  );
};
