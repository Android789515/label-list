import { type WireLabelsSetter } from 'types';

import styles from './AmountsForm.module.css';

interface Props {
  setWireLabels: WireLabelsSetter;
}

export const AmountsForm = ({ setWireLabels }: Props) => {
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
        type={'number'}
        className={styles.input}
        onChange={event => {
          const input = event.target as HTMLInputElement;

          setWireLabels(prevLabels => {
            return prevLabels.map(label => {
              return {
                ...label,
                amount: Number(input.value),
              };
            });
          });
        }}
      />
    </label>
  );
};
