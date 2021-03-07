import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonitorComponent} from './monitor/monitor.component';
import {AddCandidateComponent} from './add-candidate/add-candidate.component';
import {UpdateCandidateComponent} from './update-candidate/update-candidate.component';
import { ResultComponent } from './result/result.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path:'monitor',component:MonitorComponent},
  {path:'result',component:ResultComponent},
  {path :'addNew' ,component:AddCandidateComponent},
  {path:'updateOne',component:UpdateCandidateComponent},
  {path:'logout',component:LogoutComponent},
  {path:'passChange' ,component:ChangePasswordComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
