import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";

import * as UserReducersActions from "./user.reducer";

export interface IAppState {
  data: UserReducersActions.IUserState;
}
export const reducers: ActionReducerMap<IAppState> = {
  data: UserReducersActions.reducer
};

// export const metaReducers: MetaReducer<IAppState>[] = !environment.production
//   ? []
//   : [];
export const metaReducers: MetaReducer<IAppState>[] = [];
export const getUserState = (state: IAppState) => state.data;
export const getAllItems = createSelector(
  getUserState,
  UserReducersActions.getUsers
);
