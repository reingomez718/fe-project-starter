import { Action } from 'redux';

interface IActionToggleMessage extends Action {
  type: 'TOGGLE_MESSAGE';
}

export const toggleMessage = (): IActionToggleMessage => ({
  type: 'TOGGLE_MESSAGE',
});

export type TActionsUi = IActionToggleMessage;
