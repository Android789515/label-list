import { ChangeEvent, useRef, useEffect } from 'react';
import { v4 as newUUID } from 'uuid';

import { type WireLabels, WireLabelsSetter } from 'types';
import { useShortcuts } from '../../../../shortcuts';

import styles from './WireForm.module.css';

import { Label } from './components/label';
import { DeleteButton } from './components/delete-button';

interface Props {
  formData: WireLabels;
  setWireLabels: WireLabelsSetter;
  removeWire: (wireToRemove: WireLabels) => void;
}

export const WireForm = ({ formData, setWireLabels, removeWire }: Props) => {
  const shortcutRegistry = useShortcuts();

  shortcutRegistry.registerShortcut({
    id: newUUID(),
    key: '~',
    description: 'Remove the current wire label.',
    action: event => {
      const labelTextField = event.target as HTMLInputElement;

      const previousLabel = labelTextField.parentNode?.parentNode?.previousSibling as HTMLLIElement;

      const deleteButtonForLabel = labelTextField.parentNode?.nextSibling?.nextSibling as HTMLButtonElement | null;

      deleteButtonForLabel?.click();

      const previousLabelTextField = previousLabel.firstChild?.firstChild?.nextSibling as HTMLInputElement | null;

      previousLabelTextField?.focus();
    },
  });

  const handleForm = (event: ChangeEvent) => {
    const fieldChanged = event.target.parentElement!.firstChild!.textContent!.toLowerCase();
    const { value } = event.target as HTMLInputElement;

    setWireLabels(prevLabels => {
      return prevLabels.map(label => {
        if (label.id === formData.id) {
          return {
            ...label,
            [fieldChanged]: value.split('~').join(''),
          };
        } else {
          return label;
        }
      });
    });
  };

  const labelRef = useRef<HTMLInputElement | null>(null);

  const focusLabel = () => {
    labelRef.current?.focus();
  };

  useEffect(focusLabel, []);

  return (
    <li
      className={styles.wireForm}
    >
      <Label
        text={'Label'}
      >
        <input
          type={'text'}
          className={styles.label}
          onChange={handleForm}
          value={formData.label}
          ref={labelRef}
        />
      </Label>

      <Label
        text={'Amount'}
      >
        <input
          type={'number'}
          className={styles.labelAmount}
          onChange={handleForm}
          value={formData.amount}
        />
      </Label>

      <DeleteButton
        onClick={() => removeWire(formData)}
      />
    </li>
  );
}
