import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  headerStyle: boolean = false;

  ngOnInit(): void {}

  homeButtonClick() {
    console.log("------Home button Clicked--------");
    this.headerStyle = !this.headerStyle;
  }
}
