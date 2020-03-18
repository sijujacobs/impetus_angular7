import { Action } from "@ngrx/store";
import { IProduct } from "../models/product.model";
import * as ProductActions from "../actions/product.actions";

const initialState: IProduct = {
  name: "MyProduct",
  brand: "MyBrand",
  url: "https://www.google.com/"
};

export function productReducer(
  state: IProduct[] = [initialState],
  action: ProductActions.Actions
) {
  switch (action.type) {
    case ProductActions.ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
}
