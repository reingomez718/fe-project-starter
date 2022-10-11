import { applyMiddleware, createStore, Store } from 'redux';
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import { TActionsApp } from './actions';
import reducer from './reducers';

export type TStore = ReturnType<typeof reducer>;

export type TDispatchApp = ThunkDispatch<TStore, null, TActionsApp>;

export const store: Store = createStore(
  reducer,
  applyMiddleware<TDispatchApp, any>(thunk as ThunkMiddleware<TStore, TActionsApp, any>),
);
