import { v4 as newUUID } from 'uuid';

import { type WireLabelsSetter } from 'types';
import { predictNextLabel } from 'utils';
import { useShortcuts } from '../../shortcuts';

import styles from './AddWireLabelButton.module.css';

import { Button } from 'components/button';

interface Props {
  setWireLabels: WireLabelsSetter;
}

export const AddWireLabelButton = ({ setWireLabels }: Props) => {
  const DEFAULT_LABEL_AMOUNT = 2;

  const addNewWireLabel = () => {
    setWireLabels(prevData => {
      return [
        ...prevData,
        {
          id: newUUID(),
          label: predictNextLabel(
            prevData.at(-2)?.label || '',
            prevData.at(-1)?.label || '',
          ),
          amount: prevData.at(-1)?.amount || DEFAULT_LABEL_AMOUNT,
        },
      ];
    });
  };

  const shortcutRegistry = useShortcuts();

  shortcutRegistry.registerShortcut({
    id: newUUID(),
    key: 'Enter',
    description: 'Add a new wire label.',
    action: addNewWireLabel,
  });

  return (
    <Button
      text={'Add Wire Label'}
      customStyles={styles.addWireForm}
      mouseEvents={{
        onClick: addNewWireLabel,
      }}
    />
  );
}
