import { create } from 'zustand';

import { type Shortcut } from 'types';

interface ShortcutState {
  shortcuts: Shortcut[];
  registerShortcut: (shortcut: Shortcut) => void;
}

export const useShortcuts = create<ShortcutState>(set => {
  return {
    shortcuts: [],
    registerShortcut: (shortcut: Shortcut) => set(state => {
      const shortcutKey = shortcut.key === 'Space' ? ' ' : shortcut.key;

      const isNewShortcut = !state.shortcuts.some(registeredShortcut => {
        return registeredShortcut.key === shortcutKey;
      });

      if (isNewShortcut) {
        const newShortcut = {
          ...shortcut,
          key: shortcutKey,
        };

        return {
          ...state,
          shortcuts: [
            ...state.shortcuts,
            newShortcut,
          ],
        };
      } else {
        console.error('Shortcut already exists', shortcut.key);

        return state;
      }
    }),
  };
});

export const registerShortcuts = (shortcuts: Shortcut[]) => {
  const onShortcutPress = (event: KeyboardEvent) => {
    shortcuts.forEach(({ key: shortcutKey, action }) => {
      const matchesShortcut = event.key === shortcutKey;

      if (matchesShortcut) {
        action(event);
      }
    });
  };

  const clearShortcuts = () => {
    document.body.removeEventListener('keydown', onShortcutPress);
  };

  document.body.addEventListener('keydown', onShortcutPress);

  return clearShortcuts;
};
