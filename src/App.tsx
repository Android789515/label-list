import { useState } from 'react';

import { type WireLabels } from 'types';

import styles from './App.module.css';

import { Header } from 'components/header';
import { AddWireLabelButton } from 'components/add-wire-label-button';
import { AmountsForm } from 'components/amounts-form';
import { WireList } from 'components/wire-list';
import { ClearLabelsButton } from 'components/clear-labels-button';

export const App = () => {
  const [ wireLabels, setWireLabels ] = useState<WireLabels[]>([]);

  return (
    <div
      className={styles.app}
    >
      <main
        className={styles.layout}
      >
        <Header
          wireLabels={wireLabels}
        >
          <AddWireLabelButton
            setWireLabels={setWireLabels}
          />
        </Header>

        <AmountsForm
          setWireLabels={setWireLabels}
        />

        <ClearLabelsButton
          hidden={!wireLabels.length}
          setWireLabels={setWireLabels}
        />

        <WireList
          wireLabels={wireLabels}
          setWireLabels={setWireLabels}
        />
      </main>
    </div>
  );
};
