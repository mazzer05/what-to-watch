import { Middleware } from 'redux';
import browserHistory from '../../services/browser-history';
import { Action } from 'redux';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

interface RedirectAction extends Action {
  type: 'film/redirectToRoute';
  payload: string;
}

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action: RedirectAction) => {
  if (action.type === 'film/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
