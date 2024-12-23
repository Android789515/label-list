import { useState, useEffect } from 'react';

import { type WireLabels } from 'types';
import { useShortcuts, registerShortcuts } from './shortcuts';

import styles from './App.module.css';

import { Header } from 'components/header';
import { AddWireLabelButton } from 'components/add-wire-label-button';
import { AmountsForm } from 'components/amounts-form';

import { ShortcutsLegend } from 'components/shortcuts-legend';

import { WireList } from 'components/wire-list';

export const App = () => {
  const [ wireLabels, setWireLabels ] = useState<WireLabels[]>([]);

  const shortcutRegistry = useShortcuts();

  useEffect(() => {
    const clearShortcuts = registerShortcuts(shortcutRegistry.shortcuts);

    return clearShortcuts;
  }, [ shortcutRegistry.shortcuts ]);

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

        <WireList
          wireLabels={wireLabels}
          setWireLabels={setWireLabels}
        />

        <ShortcutsLegend
          shortcuts={shortcutRegistry.shortcuts}
        />
      </main>
    </div>
  );
};
