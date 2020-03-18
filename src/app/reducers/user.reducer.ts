import * as UserActions from "../actions/user.actions";

import { IUser } from "../models/user.model";
export interface IUserState {
  users: IUser[];
  loading: boolean;
  error: any;
}
export const initialState: IUserState = {
  users: [],
  loading: false,
  error: null
};

export function reducer(
  state = initialState,
  action: UserActions.Actions
): IUserState {
  switch (action.type) {
    case UserActions.ActionTypes.GET_USERS_BEGIN:
      return { ...state, loading: true, error: null };
    case UserActions.ActionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload.data
      };
    }

    case UserActions.ActionTypes.GET_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}

export const getUsers = (state: IUserState) => state.users;
