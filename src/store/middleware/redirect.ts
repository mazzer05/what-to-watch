import { Middleware } from 'redux';
import { reducer } from '../reducer';
import browserHistory from '../../services/browser-history';
import { Action } from 'redux';

type Reducer = ReturnType<typeof reducer>;

interface RedirectAction extends Action {
  type: 'game/redirectToRoute';
  payload: string;
}

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action: RedirectAction) => {
  if (action.type === 'game/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
