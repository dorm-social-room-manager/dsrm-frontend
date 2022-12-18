import { MouseEventHandler } from 'react';

export type Err = {
  email?: string;
  password?: string;
};

export interface buttonFunctions {
  RegisterButtonFunction: MouseEventHandler<HTMLButtonElement>;
}
