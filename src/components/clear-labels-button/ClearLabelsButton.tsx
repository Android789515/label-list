import clearIcon from './clear.svg';
import styles from './ClearLabelsButton.module.css';

import { IconButton } from 'components/icon-button';

interface Props {
  clearLabels: () => void;
}

export const ClearLabelsButton = ({ clearLabels }: Props) => {
  return (
    <IconButton
      name='Clear All Labels'
      text={'Clear All Labels'}
      icon={clearIcon}
      buttonStyles={styles.button}
      onClick={clearLabels}
    />
  );
};
