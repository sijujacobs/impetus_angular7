import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { IProduct } from "../../models/product.model";
import { IAppState } from "../../app.state";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  products: Observable<IProduct[]>;
  constructor(private store: Store<IAppState>) {
    this.products = store.select("product");
  }

  ngOnInit(): void {}
}
