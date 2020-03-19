import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserComponent as stud } from "./user/user.component";
import { ProductComponent } from "./components/product/product.component";
import { SubjectComponent } from "./components/subject/subject.component";
import { DocumentComponent } from "./document/document.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "students", component: stud },
  { path: "product", component: ProductComponent },
  { path: "user", component: SubjectComponent },
  { path: "document", component: DocumentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
