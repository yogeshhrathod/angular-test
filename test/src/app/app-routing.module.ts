import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PepleComponent } from "./components/peple/peple.component";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent

  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'people', component: PepleComponent
      },
      {
        path: 'dashboard', component: PepleComponent
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
