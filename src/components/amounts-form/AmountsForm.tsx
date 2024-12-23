import { useState, useEffect } from 'react';
import { v4 as newUUID } from 'uuid';

import { type WireLabelsSetter } from 'types';
import { useShortcuts } from '../../shortcuts';

import styles from './AmountsForm.module.css';

interface Props {
  setWireLabels: WireLabelsSetter;
}

export const AmountsForm = ({ setWireLabels }: Props) => {
  const [ setAllAmounts, toggleSetAllAmounts ] = useState(true);

  const shortcutRegistry = useShortcuts();

  const amountsFieldRef = 'amountsField';

  useEffect(() => {
    shortcutRegistry.registerShortcut({
      id: newUUID(),
      key: 'Space',
      description: 'Set all labels amounts.',
      action: () => {
        const amountsField = document.getElementById(amountsFieldRef) as HTMLInputElement;
  
        amountsField.focus();
      },
    });
  }, []);

  return (
    <label
      className={styles.amountsForm}
    >
      <span
        className={styles.text}
      >
        Set All Amounts
      </span>

      <input
        type='checkbox'
        className={styles.checkbox}
        checked={setAllAmounts}
        onChange={() => toggleSetAllAmounts(isChecked => !isChecked)}
      />

      <input
        type={'number'}
        className={styles.input}
        id={amountsFieldRef}
        onChange={event => {
          if (setAllAmounts) {
            const input = event.target as HTMLInputElement;

            setWireLabels(prevLabels => {
              return prevLabels.map(label => {
                return {
                  ...label,
                  amount: Number(input.value),
                };
              });
            });
          }
        }}
      />
    </label>
  );
};
