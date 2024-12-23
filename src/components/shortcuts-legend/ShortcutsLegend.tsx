import { v4 as newUUID } from 'uuid';

import { type Shortcut } from 'types';
import { useShortcuts } from '../../shortcuts';

import styles from './ShortcutsLegend.module.css';

import { ShowOrHideButton } from './components/show-or-hide-button';
import { LegendTitle } from './components/legend-title';

interface Props {
  shortcuts: Shortcut[];
}

export const ShortcutsLegend = ({ shortcuts }: Props) => {
  const legendRef = 'shortcutLegend';

  const shortcutRegistry = useShortcuts();

  shortcutRegistry.registerShortcut({
    id: newUUID(),
    key: 'S',
    description: 'View keyboard shortcuts.',
    action: () => {
      const legend = document.getElementById(legendRef) as HTMLUListElement;

      const isFocused = document.activeElement === legend;
      if (isFocused) {
        legend.blur();
      } else {
        legend.focus();
      }
    },
  });

  const usesShift = (shortcutKey: string): boolean => {
    return shortcutKey !== ' '
      && shortcutKey.toLocaleUpperCase() === shortcutKey;
  };

  return (
    <footer
      className={styles.legend}
      id={legendRef}
      tabIndex={1}
    >
      <ShowOrHideButton />

      <LegendTitle />

      <ul
        className={styles.shortcuts}
      >
        {shortcuts.map(shortcut => {
          return (
            <li
              key={shortcut.id}
              className={styles.shortcut}
            >
              <span
                className={styles.shortcutKeyBackground}
              >
                <button
                  className={styles.shortcutKey}
                  onClick={() => shortcut.action()}
                >
                  {usesShift(shortcut.key) && 'Shift+'}
                  {shortcut.key === ' ' ? 'Space' : shortcut.key}
                </button>
              </span>

              <em
                className={styles.shortcutDescription}
              >
                {shortcut.description}
              </em>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
