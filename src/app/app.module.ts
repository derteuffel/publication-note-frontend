import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header/header.component';
import { Parametre } from './auth/requests/parametre';
import { FooterComponent } from './header/footer/footer.component';
import {  NoteHomeComponent } from './note/note-home/note-home.component';
import {  NoteDetailComponent } from './note/note-detail/note-detail.component';
import { CompteListComponent } from './user/comptes/compte-list/compte-list.component';
import { CompteAddComponent } from './user/comptes/compte-add/compte-add.component';
import { EtudiantListComponent } from './user/etudiants/etudiant-list/etudiant-list.component';
import { EtudiantDetailComponent } from './user/etudiants/etudiant-detail/etudiant-detail.component';
import { EtudiantUpdateComponent } from './user/etudiants/etudiant-update/etudiant-update.component';
import { CompteProfileComponent } from './user/comptes/compte-profile/compte-profile.component';
import { PaymentStudentListComponent } from './payments/payment-student-list/payment-student-list.component';
import { PaymentStudentAddComponent } from './payments/payment-student-add/payment-student-add.component';
import { PaymentStudentDetailComponent } from './payments/payment-student-detail/payment-student-detail.component';
import { PaymentStudentSentCodeComponent } from './payments/payment-student-sent-code/payment-student-sent-code.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteAddComponent } from './note/note-add/note-add.component';
import { NoteSessionDetailComponent } from './note/note-session-detail/note-session-detail.component';
import { NoteSearchComponent } from './note/note-search/note-search.component';
import { HomeComponent } from './facultes/home/home.component';
import { FacultyDetailComponent } from './facultes/faculty-detail/faculty-detail.component';
import { FacultyUpdateComponent } from './facultes/faculty-update/faculty-update.component';
import { DepartementHomeComponent } from './departements/departement-home/departement-home.component';
import { DepartementUpdateComponent } from './departements/departement-update/departement-update.component';
import { OptionsHomeComponent } from './options/options-home/options-home.component';
import { OptionsEtudiantAddComponent } from './options/options-etudiant-add/options-etudiant-add.component';
import { OptionsEtudiantDetailComponent } from './options/options-etudiant-detail/options-etudiant-detail.component';
import { OptionsEtudiantUpdateComponent } from './options/options-etudiant-update/options-etudiant-update.component';
import { LoginSuccessComponent } from './auth/login-success/login-success.component';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { PostHomeComponent } from './posts/post-home/post-home.component';
import { PostAddComponent } from './posts/post-add/post-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    NoteHomeComponent,
    NoteDetailComponent,
    CompteListComponent,
    CompteAddComponent,
    EtudiantListComponent,
    OptionsEtudiantAddComponent,
    OptionsEtudiantDetailComponent,
    OptionsEtudiantUpdateComponent,
    EtudiantDetailComponent,
    EtudiantUpdateComponent,
    CompteProfileComponent,
    PaymentStudentListComponent,
    PaymentStudentAddComponent,
    PaymentStudentDetailComponent,
    PaymentStudentSentCodeComponent,
    NoteListComponent,
    NoteAddComponent,
    NoteSessionDetailComponent,
    NoteSearchComponent,
    HomeComponent,
    FacultyDetailComponent,
    FacultyUpdateComponent,
    DepartementHomeComponent,
    DepartementUpdateComponent,
    OptionsHomeComponent,
    LoginSuccessComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    PostHomeComponent,
    PostAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    //NgxSpinnerModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
