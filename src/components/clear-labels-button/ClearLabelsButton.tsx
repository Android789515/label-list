import { type WireLabelsSetter } from 'types';

import clearIcon from './clear.svg';
import styles from './ClearLabelsButton.module.css';

import { IconButton } from 'components/icon-button';

interface Props {
  hidden?: boolean;
  setWireLabels: WireLabelsSetter;
}

export const ClearLabelsButton = ({ hidden, setWireLabels }: Props) => {
  return ( !hidden &&
    <IconButton
      name='Clear All Labels'
      text={'Clear All Labels'}
      icon={clearIcon}
      buttonStyles={styles.button}
      onClick={() => setWireLabels([])}
    />
  );
};
