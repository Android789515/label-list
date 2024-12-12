import { type WireData } from 'types';

import styles from './DownloadButton.module.css';

interface Props {
  data: WireData[];
}

export const DownloadButton = ({ data }: Props) => {
  return (
    <button
      className={styles.downloadButton}
    >
      Download Wire Labels
    </button>
  );
}
