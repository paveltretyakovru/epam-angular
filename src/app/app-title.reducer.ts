import { ActionReducer, Action } from '@ngrx/store';

export const SET_TITLE = 'SET_TITLE';

export const appTitleReducer: ActionReducer<string> =
  (state: string = 'No title', action: Action) => {
    switch(action.type) {
      case SET_TITLE:
        return action.payload;

      default:
        return state;
    }
  }
