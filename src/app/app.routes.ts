import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {UserComponent} from "./admin/user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Sing in' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard',
      },
      {
        path: 'users',
        component: UserComponent,
        title: 'Users management',
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
