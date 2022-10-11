import { Todos } from '@containers/todos';
import { toggleMessage } from '@store/actions/ui';
import { TDispatchApp, TStore } from '@store/index';
import { TextDisplay } from '@visuals/text-display';
import React, { PropsWithChildren } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const App: React.FC<PropsWithChildren> = () => {
  const dispatch: TDispatchApp = useDispatch();
  const isShowMessage = useSelector((state: TStore) => state?.ui?.isShowMessage);

  return (
    <div>
      <TextDisplay>Test App</TextDisplay>
      <Todos />
      {isShowMessage && <TextDisplay color='gray'>MESSAGE</TextDisplay>}
      <TextDisplay onClick={() => dispatch(toggleMessage())}>Click me</TextDisplay>
    </div>
  );
};
