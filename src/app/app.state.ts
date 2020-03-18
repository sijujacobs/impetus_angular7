import { IProduct } from "./models/product.model";

export interface IAppState {
  readonly product: IProduct[];
}
