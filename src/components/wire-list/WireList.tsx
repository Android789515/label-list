import { type Dispatch, type SetStateAction } from 'react';

import { type WireData } from 'types';

import styles from './WireList.module.css';

import { WireForm } from './components/wire-form';

interface Props {
  wireForms: WireData[];
  setWireForms: Dispatch<SetStateAction<WireData[]>>;
  removeWire: (wireToRemove: WireData) => void;
}

export const WireList = ({ wireForms, setWireForms, removeWire }: Props) => {
  return (
    <ul
      className={styles.wireList}
    >
      {wireForms.map((form, key) => {
        return (
          <WireForm
            key={key}
            formData={form}
            setWireForms={setWireForms}
            removeWire={removeWire}
          />
        );
      })}
    </ul>
  );
};
