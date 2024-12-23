import { type WireLabels, type WireLabelsSetter } from 'types';

import styles from './WireList.module.css';

import { ClearLabelsButton } from 'components/clear-labels-button';
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
    <section
      className={styles.wireList}
    >
      <ClearLabelsButton
        hidden={!wireLabels.length}
        setWireLabels={setWireLabels}
      />

        <ul
          className={styles.wireListLayout}
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
    </section>
  );
};
