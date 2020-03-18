import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
// import { UserComponent } from "./user/user.component";
import { ProductComponent } from "./components/product/product.component";
import { UserComponent } from "./components/user/user.component";
import { DocumentComponent } from "./document/document.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "students", component: UserComponent },
  { path: "product", component: ProductComponent },
  { path: "user", component: UserComponent },
  { path: "document", component: DocumentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
