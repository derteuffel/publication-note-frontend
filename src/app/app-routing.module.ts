import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginSuccessComponent } from './auth/login-success/login-success.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';
import { DepartementHomeComponent } from './departements/departement-home/departement-home.component';
import { DepartementUpdateComponent } from './departements/departement-update/departement-update.component';
import { Role } from './enums/role';
import { FacultyDetailComponent } from './facultes/faculty-detail/faculty-detail.component';
import { FacultyUpdateComponent } from './facultes/faculty-update/faculty-update.component';
import { HomeComponent } from './facultes/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { NoteAddComponent } from './note/note-add/note-add.component';
import { NoteDetailComponent } from './note/note-detail/note-detail.component';
import { NoteHomeComponent } from './note/note-home/note-home.component';
import { NoteSearchComponent } from './note/note-search/note-search.component';
import { NoteSessionDetailComponent } from './note/note-session-detail/note-session-detail.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { OptionsEtudiantAddComponent } from './options/options-etudiant-add/options-etudiant-add.component';
import { OptionsEtudiantDetailComponent } from './options/options-etudiant-detail/options-etudiant-detail.component';
import { OptionsEtudiantUpdateComponent } from './options/options-etudiant-update/options-etudiant-update.component';
import { OptionsHomeComponent } from './options/options-home/options-home.component';
import { PaymentStudentAddComponent } from './payments/payment-student-add/payment-student-add.component';
import { PaymentStudentDetailComponent } from './payments/payment-student-detail/payment-student-detail.component';
import { PaymentStudentListComponent } from './payments/payment-student-list/payment-student-list.component';
import { PaymentStudentSentCodeComponent } from './payments/payment-student-sent-code/payment-student-sent-code.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { PostHomeComponent } from './posts/post-home/post-home.component';
import { CompteAddComponent } from './user/comptes/compte-add/compte-add.component';
import { CompteListComponent } from './user/comptes/compte-list/compte-list.component';
import { CompteProfileComponent } from './user/comptes/compte-profile/compte-profile.component';
import { EtudiantDetailComponent } from './user/etudiants/etudiant-detail/etudiant-detail.component';
import { EtudiantListComponent } from './user/etudiants/etudiant-list/etudiant-list.component';
import { EtudiantUpdateComponent } from './user/etudiants/etudiant-update/etudiant-update.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'login/success', component: LoginSuccessComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.PAIEMENT, Role.DOYEN, Role.ENCODEUR, Role.NOTE]}},
  {path: '401', component: UnauthorizedComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT]}},
  {path: 'faculties/detail/:id', component: FacultyDetailComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.DOYEN]}},
  {path: 'faculties/update/:id', component: FacultyUpdateComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT]}},
  {path: 'departements/detail/:id', component: DepartementHomeComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.DOYEN]}},
  {path: 'departements/update/:id', component: DepartementUpdateComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.DOYEN]}},
  {path: 'options/detail/:id', component: OptionsHomeComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.DOYEN]}},
  {path: 'options/etudiants/detail/:id', component: OptionsEtudiantDetailComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.DOYEN]}},
  {path: 'options/etudiants/add/:id', component: OptionsEtudiantAddComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.DOYEN]}},
  {path: 'options/etudiants/update/:id', component: OptionsEtudiantUpdateComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.DOYEN]}},
  {path: 'notes/home', component: NoteHomeComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.NOTE, Role.ENCODEUR]}},
  {path: 'notes/form/add', component: NoteAddComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.NOTE, Role.ENCODEUR]}},
  {path: 'notes/etudiants/detail/:id', component: NoteDetailComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT,Role.NOTE, Role.ENCODEUR]}},
  {path: 'notes/etudiants/getNote/:id', component: NoteSearchComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT,Role.NOTE, Role.ENCODEUR]}},
  {path: 'notes/etudiants/sessions/detail/:id', component: NoteSessionDetailComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT,Role.NOTE, Role.ENCODEUR]}},
  {path: 'comptes/home', component: CompteListComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT]}},
  {path: 'comptes/add', component: CompteAddComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT]}},
  {path: 'comptes/profile/:id', component: CompteProfileComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT]}},
  {path: 'etudiants/home', component: EtudiantListComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT]}},
  {path: 'etudiants/detail/:id', component: EtudiantDetailComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT]}},
  {path: 'etudiants/update/:id', component: EtudiantUpdateComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT]}},
  {path: 'payments/home', component: PaymentStudentListComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.PAIEMENT]}},
  {path: 'payments/student/add', component: PaymentStudentAddComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.PAIEMENT]}},
  {path: 'payments/student/detail/:id', component: PaymentStudentDetailComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.PAIEMENT]}},
  {path: 'payments/student/sentCode/:id', component: PaymentStudentSentCodeComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.PAIEMENT]}},
  {path: 'posts/home', component: PostHomeComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.PAIEMENT, Role.DOYEN, Role.ENCODEUR]}},
  {path: 'posts/form/add', component: PostAddComponent, canActivate: [AuthGuard], data:{roles: [Role.ADMIN, Role.ROOT, Role.PAIEMENT, Role.DOYEN, Role.ENCODEUR]}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router: Router){

    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
}
