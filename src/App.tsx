import { useState } from 'react';
import { v4 as newUUID } from 'uuid';

import { type WireData } from 'types';
import { useShortcuts } from './useShortcuts';
import { predictNextLabel } from './utils';

import styles from './App.module.css';

import { Title } from 'components/title';
import { WireList, AddWireForm } from 'components/wire-list';
import { DownloadButton } from 'components/download-button';

export const App = () => {
  const DEFAULT_LABEL_AMOUNT = 2;

  const [ wireForms, setWireForms ] = useState<WireData[]>([]);

  const addNewWire = () => {
    setWireForms(prevData => {
      return [
        ...prevData,
        {
          id: newUUID(),
          label: predictNextLabel(prevData.at(-1)?.label || ''),
          amount: prevData.at(-1)?.amount || DEFAULT_LABEL_AMOUNT,
        },
      ];
    });
  };

  const removeWire = (wireToRemove: WireData) => {
    setWireForms(prevForms => {
      return prevForms.filter(form => form.id !== wireToRemove.id);
    });
  };

  useShortcuts({
    Enter: addNewWire,
  });

  return (
    <div
      className={styles.app}
    >
      <main
        className={styles.layout}
      >
        <header>
          <Title />

          <DownloadButton
            data={wireForms}
          />

          <AddWireForm
            addNewWire={addNewWire}
          />
        </header>

        <WireList
          wireForms={wireForms}
          setWireForms={setWireForms}
          removeWire={removeWire}
        />
      </main>
    </div>
  );
};
