import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { TakeNotesComponent } from './components/take-notes/take-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { IconslistComponent } from './components/iconslist/iconslist.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { TrashComponent } from './components/trash/trash.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { ArchivenotesComponent } from './components/archivenotes/archivenotes.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    TakeNotesComponent,
    DisplayNotesComponent,
    IconslistComponent,
    GetallnotesComponent,
    TrashComponent,
    UpdateNoteComponent,
    ArchivenotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,FormsModule,FlexLayoutModule,HttpClientModule,MatToolbarModule,
    MatSnackBarModule,MatSidenavModule,MatListModule,MatIconModule,MatMenuModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
