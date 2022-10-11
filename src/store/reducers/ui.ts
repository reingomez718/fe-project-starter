import { IUi } from '@models/ui';
import { TActionsUi } from '@store/actions/ui';
import { updateObject } from '@utils/update-object';

export const initialState: IUi = {
  isShowMessage: false,
};

export function ui(state: IUi = initialState, action: TActionsUi) {
  switch (action.type) {
    case 'TOGGLE_MESSAGE':
      return updateObject(state, {
        isShowMessage: !state?.isShowMessage,
      });
    default:
      return state;
  }
}
