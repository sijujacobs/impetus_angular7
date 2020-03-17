import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  users: Object;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getCustomers().subscribe(response => {
      // console.log("Has data : ", response.hasOwnProperty("data"));
      this.users = response["data"];
    });
  }
}
