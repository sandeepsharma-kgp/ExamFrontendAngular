import { NgModule } from '@angular/core';
import { ActivatedRoute,Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { SubjectViewComponent } from './subject-view/subject-view.component'

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},{
  path: 'register',
  component: RegisterComponent,
},{
  path: 'subject/view',
  component: SubjectViewComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  routes = routes;
}
