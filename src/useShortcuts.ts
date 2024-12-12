import { useEffect } from 'react';

export interface Shortcuts {
  [shortcutKey: string]: () => void;
}

export const useShortcuts = (shortcuts: Shortcuts) => {
  const onShortcutPress = (event: KeyboardEvent) => {
    Object.entries(shortcuts).forEach(([ shortcut, action ]) => {
      if (event.key === shortcut) {
        action();
      }
    });
  };

  const clearShortcuts = () => {
    document.body.removeEventListener('keydown', onShortcutPress);
  };

  const registerShortcuts = () => {
    document.body.addEventListener('keydown', onShortcutPress);

    return clearShortcuts;
  };

  useEffect(registerShortcuts, []);
};
