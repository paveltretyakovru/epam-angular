import { ActionReducer, Action } from '@ngrx/store';

export const SET_AUTH = 'SET_AUTH';

export const loginAuthReducer: ActionReducer<boolean> =
  (state: boolean = false, action: Action) => {
    switch(action.type) {
      case SET_AUTH:
        return action.payload;

      default:
        return state;
    }
  }
