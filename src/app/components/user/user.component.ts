import { Component, OnInit } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { Observable } from "rxjs";
import { IUser } from "src/app/models/user.model";
// import { Store } from "@ngrx/store";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  // users: Object;
  users: IUser[] = [];
  // constructor(private store: Store<{ users: IUser[] }>) {
  //   console.log("UserComponent :: constructor -------this - ", this);
  // }
  // users$: Observable<IUser[]> = this.store.select(state => state.users);
  constructor(private userService: UserService) {
    this.userService.load();
  }

  ngOnInit(): void {
    // this.store.dispatch({ type: "[Users Page] Load Users" });
    // console.log("UserComponent :: onInit -------- ");
    this.userService.getData().subscribe(data => {
      this.users = data.users["data"];
      console.log(
        "UserComponent ::ngOnInit : isArray-> this.users : ",
        Array.isArray(this.users)
      );
      console.log("UserComponent ::ngOnInit : this.users : ", this.users);
    });
  }
}
