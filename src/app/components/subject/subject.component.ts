import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.scss"]
})
export class SubjectComponent implements OnInit {
  users = [];
  constructor(private userService: UserService) {
    this.userService.load();
  }

  ngOnInit(): void {
    this.userService.getData().subscribe(response => {
      console.log("SubjectComponent :: data : ", response.users["data"]);
      this.users = response.users["data"];
    });
  }
}
