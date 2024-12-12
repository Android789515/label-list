import styles from './AddWireForm.module.css';

interface Props {
  addNewWire: () => void;
}

export const AddWireForm = ({ addNewWire }: Props) => {
  return (
    <button
      className={styles.addWireForm}
      onClick={addNewWire}
    >
      Add Wire
    </button>
  );
}
