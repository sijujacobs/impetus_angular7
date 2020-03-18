import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { HttpClient } from "@angular/common/http";
import * as UserActions from "../../actions/user.actions";
import { IAppState, getAllItems, getUserState } from "../../reducers";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private store: Store<IAppState>, private http: HttpClient) {}

  loadData() {
    // console.log("-----1. UserService :: LoadData ------ : ");
    return this.http.get("https://reqres.in/api/users");
  }
  load() {
    // console.log("1. UserService :: Load------");
    this.store.dispatch(new UserActions.GetUsersBegin());
  }

  getData() {
    return this.store.select(getUserState);
  }

  getUsers() {
    // console.log("1. UserService :: getUsers ------ : ");
    return this.store.select(getAllItems);
  }
}
