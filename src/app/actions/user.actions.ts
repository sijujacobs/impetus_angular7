import { Action } from "@ngrx/store";
// import { IUser } from "../models/user.model";

export enum ActionTypes {
  GET_USERS_BEGIN = "[User] Get Users begin",
  GET_USERS_SUCCESS = "[User] Get Users success",
  GET_USERS_FAILURE = "[User] Get Users failure"
}

export class GetUsersBegin implements Action {
  readonly type = ActionTypes.GET_USERS_BEGIN;
}

export class GetUsersSuccess implements Action {
  readonly type = ActionTypes.GET_USERS_SUCCESS;

  constructor(public payload: { data: any }) {}
}

export class GetUsersFailure implements Action {
  readonly type = ActionTypes.GET_USERS_FAILURE;

  constructor(public payload: { error: any }) {}
}

export type Actions = GetUsersBegin | GetUsersSuccess | GetUsersFailure;
