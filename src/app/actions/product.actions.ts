import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { IProduct } from "../models/product.model";

export const ADD_PRODUCT = "[Product]_Add";
export const REMOVE_PRODUCT = "[Product]_Remove";

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: IProduct) {}
}
export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;
  constructor(public payload: number) {}
}

export type Actions = AddProduct | RemoveProduct;
