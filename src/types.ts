import { type MouseEvent, type Dispatch, type SetStateAction } from 'react';

export interface MouseEvents {
  [event: string]: (event: MouseEvent) => void;
}

export type UUID = string;

export interface WireLabels {
  id: UUID;
  label: string;
  amount: number;
}

export type WireLabelsSetter = Dispatch<SetStateAction<WireLabels[]>>;

export interface Shortcut {
  id: UUID;
  key: string;
  description: string;
  action: (event: KeyboardEvent) => void;
}
