import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { HeaderComponent } from "./shared/header/header.component";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { ExitComponent } from "./shared/exit/exit.component";
import { BlogComponent } from './blog/blog/blog.component';

@NgModule({
  declarations: [AppComponent, routingComponents, ExitComponent, BlogComponent],
  imports: [MDBBootstrapModule.forRoot(), BrowserModule, AppRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
