import { type WireLabels, type WireLabelsSetter } from 'types';

import styles from './WireList.module.css';

import { WireForm } from './components/wire-form';

interface Props {
  wireLabels: WireLabels[];
  setWireLabels: WireLabelsSetter;
}

export const WireList = ({ wireLabels, setWireLabels }: Props) => {
  const removeWire = (wireToRemove: WireLabels) => {
    setWireLabels(prevForms => {
      return prevForms.filter(form => form.id !== wireToRemove.id);
    });
  };

  return (
    <ul
      className={styles.wireList}
    >
      {wireLabels.map((label, key) => {
        return (
          <WireForm
            key={key}
            formData={label}
            setWireLabels={setWireLabels}
            removeWire={removeWire}
          />
        );
      })}
    </ul>
  );
};
