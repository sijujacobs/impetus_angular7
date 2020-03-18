import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { UserService } from "../services/user/user.service";
import * as UserActions from "../actions/user.actions";
import { of } from "rxjs";

@Injectable()
export class UserEffects {
  constructor(private actions: Actions, private userService: UserService) {}

  @Effect()
  loadData = this.actions.pipe(
    ofType(UserActions.ActionTypes.GET_USERS_BEGIN),
    switchMap(() => {
      return this.userService.loadData().pipe(
        map(data => {
          return new UserActions.GetUsersSuccess({ data: data });
        }),
        catchError(error =>
          of(new UserActions.GetUsersFailure({ error: error }))
        )
      );
    })
  );
}
