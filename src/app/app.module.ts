import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { DocumentComponent } from "./document/document.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { UserComponent } from "./user/user.component";
import { ProductComponent } from "./components/product/product.component";
import { SubjectComponent } from "./components/subject/subject.component";

import { productReducer } from "./reducers/product.reducer";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DocumentComponent,
    UserComponent,
    ProductComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ product: productReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
