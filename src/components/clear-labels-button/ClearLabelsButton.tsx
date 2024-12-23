import { v4 as newUUID } from 'uuid';

import { type WireLabelsSetter } from 'types';
import { useShortcuts } from '../../shortcuts';

import clearIcon from './clear.svg';
import styles from './ClearLabelsButton.module.css';

import { IconButton } from 'components/icon-button';

interface Props {
  hidden?: boolean;
  setWireLabels: WireLabelsSetter;
}

export const ClearLabelsButton = ({ hidden, setWireLabels }: Props) => {
  const shortcutRegistry = useShortcuts();

  shortcutRegistry.registerShortcut({
    id: newUUID(),
    key: 'C',
    description: 'Clear all labels.',
    action: () => setWireLabels([]),
  });

  return ( !hidden &&
    <IconButton
      name='Clear All Labels'
      text={'Clear All Labels'}
      icon={clearIcon}
      buttonStyles={styles.button}
      iconStyles={styles.icon}
      mouseEvents={{
        onClick: () => setWireLabels([]),
      }}
    />
  );
};
