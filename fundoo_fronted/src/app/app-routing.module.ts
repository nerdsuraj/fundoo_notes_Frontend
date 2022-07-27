import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivenotesComponent } from './components/archivenotes/archivenotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TrashComponent } from './components/trash/trash.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { AuthGuard } from './services/authguard/auth.guard';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'forget',component:ForgetpasswordComponent},
  {path:'reset',component:ResetPasswordComponent},
  {path:'dashboard',canActivate:[AuthGuard],component:DashboardComponent,
  children:[
    {
      path:'note',
      component:GetallnotesComponent
    },
    {
      path :'trash',
      component : TrashComponent,
    },
    { path: 'archivednotes', 
      component: ArchivenotesComponent
   },
    // {
    //   path :'update',
    //   component : UpdateNoteComponent,
    // },
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
