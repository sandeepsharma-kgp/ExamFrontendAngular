import { NgModule } from '@angular/core';
import { ActivatedRoute,Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { SubjectViewComponent } from './subject-view/subject-view.component'
import { SubjectAddComponent } from './subject-add/subject-add.component'
import { SubjectEditComponent } from './subject-edit/subject-edit.component'
import { TopicAddComponent } from './topic-add/topic-add.component'
import { TopicViewComponent } from './topic-view/topic-view.component'
import { TopicEditComponent } from './topic-edit/topic-edit.component'

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},{
  path: 'register',
  component: RegisterComponent,
},{
  path: 'subject/view',
  component: SubjectViewComponent,
},{
  path: 'subject/edit/:id',
  component: SubjectEditComponent,
},{
  path: 'subject/add',
  component: SubjectAddComponent,
},{
  path: 'topic/add',
  component: TopicAddComponent,
},{
  path: 'topic/view',
  component: TopicViewComponent,
},{
  path: 'topic/edit/:id',
  component: TopicEditComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  routes = routes;
}
