import { ITodo } from '@models/todos';
import { Dispatch } from 'react';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TStore } from 'store';

interface IActionFetchTodos extends Action {
  type: 'FETCH_TODOS';
  todos: ITodo[];
}

export const fetchTodos =
  (): ThunkAction<void, TStore, null, IActionFetchTodos> =>
  async (dispatch: Dispatch<IActionFetchTodos>) => {
    try {
      const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

      const apiResponse = await fetch(apiUrl, {
        method: 'GET',
      });

      if (await !apiResponse.ok) {
        return;
      }

      const todos: ITodo[] = await apiResponse.json();
      dispatch({
        type: 'FETCH_TODOS',
        todos,
      });
    } catch (error) {}
  };

export type TActionsData = IActionFetchTodos;
