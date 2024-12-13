import { type WireData } from 'types';

import styles from './DownloadButton.module.css';

interface Props {
  data: WireData[];
}

export const DownloadButton = ({ data }: Props) => {
  const labels = data.map(label => label.label).join('\n');

  const labelsFile = new File([labels], 'labels.txt', {
    type: 'text/plain',
  });

  const url = URL.createObjectURL(labelsFile);

  return (
    <a
      href={url}
      download={labelsFile.name}
      className={styles.downloadButton}
      onClick={() => {
        setTimeout(() => {
          window.URL.revokeObjectURL(url);
        }, 1000);
      }}
    >
      Download Wire Labels
    </a>
  );
}
