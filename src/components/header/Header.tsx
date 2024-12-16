import { type ReactNode } from 'react';

import { type WireLabels } from 'types';

import styles from './Header.module.css';

import { Title } from './components/title';
import { DownloadButton } from './components/download-button';

interface Props {
  wireLabels: WireLabels[];
  children: ReactNode;
}

export const Header = ({ wireLabels, children }: Props) => {
  return (
    <header
      className={styles.header}
    >
      <Title />

      <DownloadButton
        data={wireLabels}
      />

      {children}
    </header>
  );
};
