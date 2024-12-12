import { type Dispatch, type SetStateAction, ChangeEvent, useRef, useEffect } from 'react';

import { type WireData } from 'types';

import styles from './WireForm.module.css';

import { Label } from './components/label';
import { DeleteButton } from './components/delete-button';

interface Props {
  formData: WireData;
  setWireForms: Dispatch<SetStateAction<WireData[]>>;
  removeWire: (wireToRemove: WireData) => void;
}

export const WireForm = ({ formData, setWireForms, removeWire }: Props) => {
  const handleForm = (event: ChangeEvent) => {
    const fieldChanged = event.target.parentElement!.firstChild!.textContent!.toLowerCase();
    const { value } = event.target as HTMLInputElement;

    setWireForms(prevForms => {
      return prevForms.map(form => {
        if (form.id === formData.id) {
          return {
            ...form,
            [fieldChanged]: value,
          };
        } else {
          return form;
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
