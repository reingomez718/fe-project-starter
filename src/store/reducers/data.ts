import { IData } from '@models/data';
import { TActionsData } from '@store/actions/data';
import { updateObject } from '@utils/update-object';

export const initialState: IData = {
  todos: [],
};

export const data = (state: IData = initialState, action: TActionsData) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return updateObject(state, {
        todos: action?.todos,
      });

    default:
      return state;
  }
};
