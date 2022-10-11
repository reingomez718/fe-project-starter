import { fetchTodos } from '@store/actions/data';
import { TDispatchApp, TStore } from '@store/index';
import { isOk } from '@utils/is-ok';
import { TextDisplay } from '@visuals/text-display';
import React, { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Todos: React.FC<PropsWithChildren> = () => {
  const dispatch: TDispatchApp = useDispatch();
  const todos = useSelector((state: TStore) => state.data.todos);

  useEffect(() => {
    if (!isOk(todos)) {
      dispatch(fetchTodos());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TextDisplay size='larger' color='apple'>
      {isOk(todos) && JSON.stringify(todos)}
    </TextDisplay>
  );
};
