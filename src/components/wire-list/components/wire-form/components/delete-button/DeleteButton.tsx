import { MouseEvent } from 'react';

import deleteIcon from './assets/delete.svg';
import styles from './DeleteButton.module.css';

import { IconButton } from 'components/icon-button';

interface Props {
  onClick: (event: MouseEvent) => void;
}

export const DeleteButton = ({ onClick }: Props) => {
  return (
    <IconButton
      name='Delete Label'
      icon={deleteIcon}
      buttonStyles={styles.deleteButton}
      onClick={onClick}
    />
  );
};
