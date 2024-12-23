import upIcon from './up.svg';
import styles from './ShowOrHideButton.module.css'

import { IconButton } from 'components/icon-button';

export const ShowOrHideButton = () => {
  return (
    <IconButton
      icon={upIcon}
      name={'Show or hide keyboard shortcuts.'}
      buttonStyles={styles.showOrHideButton}
      iconStyles={styles.showOrHideIcon}
    />
  );
};
