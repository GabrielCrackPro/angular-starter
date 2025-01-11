import { Type } from '@angular/core';

export type Component<T> = Type<T>;

export type ButtonSeverity =
  | 'success'
  | 'info'
  | 'warn'
  | 'danger'
  | 'help'
  | 'primary'
  | 'secondary'
  | 'contrast';
