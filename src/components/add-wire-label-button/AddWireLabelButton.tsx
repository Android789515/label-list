import { v4 as newUUID } from 'uuid';

import { type WireLabelsSetter } from 'types';
import { predictNextLabel } from 'utils';
import { useShortcuts } from '../../useShortcuts';

import styles from './AddWireLabelButton.module.css';

interface Props {
  setWireLabels: WireLabelsSetter;
}

export const AddWireLabelButton = ({ setWireLabels }: Props) => {
  const DEFAULT_LABEL_AMOUNT = 2;

  const addNewWire = () => {
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

  useShortcuts({
    Enter: addNewWire,
  });

  return (
    <button
      className={styles.addWireForm}
      onClick={addNewWire}
    >
      Add Wire
    </button>
  );
}
