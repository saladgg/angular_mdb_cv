import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ExitComponent } from "./shared/exit/exit.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "exit",
    component: ExitComponent
  },
  {
    path: "header",
    component: HeaderComponent
  },
  {
    path: "footer",
    component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  ExitComponent,
  HeaderComponent,
  FooterComponent
];
