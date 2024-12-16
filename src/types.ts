import { type Dispatch, type SetStateAction } from 'react';

export type UUID = string;

export interface WireLabels {
  id: UUID;
  label: string;
  amount: number;
}

export type WireLabelsSetter = Dispatch<SetStateAction<WireLabels[]>>;
