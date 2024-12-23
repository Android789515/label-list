import { v4 as newUUID } from 'uuid';

import { type WireLabels } from 'types';
import { useShortcuts } from '../../../../shortcuts';

import styles from './DownloadButton.module.css';

import { Button } from 'components/button';

interface Props {
  data: WireLabels[];
}

export const DownloadButton = ({ data }: Props) => {
  const labels = data.map(label => {
    return [...Array(label.amount)].map(() => label.label).join('\n');
  }).join('\n');

  const labelsFile = new File([labels], 'labels.txt', {
    type: 'text/plain',
  });

  const url = URL.createObjectURL(labelsFile);

  const shortcutRegistry = useShortcuts();

  const downloadButtonRef = 'downloadButton';

  shortcutRegistry.registerShortcut({
    id: newUUID(),
    key: 'D',
    description: 'Download labels.',
    action: () => {
      const downloadButton = document.getElementById(downloadButtonRef) as HTMLButtonElement;

      downloadButton.click();
    },
  });

  return (
    <Button
      text={'Download Wire Labels'}
      download={{
        name: labelsFile.name,
        url,
      }}
      customStyles={styles.downloadButton}
      id={downloadButtonRef}
      mouseEvents={{
        onClick: () => {
          setTimeout(() => {
            window.URL.revokeObjectURL(url);
          }, 1000);
        },
      }}
    />
  );
}
