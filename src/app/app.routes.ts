import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {UserComponent} from "./admin/user/user.component";
import {AdminComponent} from "./admin/admin.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard', // child route path
        component: DashboardComponent, // child route component that the router renders
      },
      {
        path: 'users',
        component: UserComponent, // another child route component that the router renders
      },
    ],
  },
];
