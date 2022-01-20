import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ArticleComponent } from './article/article.component';
import { CategoriesTutorialsComponent } from './categories-tutorials/categories-tutorials.component';
import { HomeComponent } from './home/home.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { ListTutorialComponent } from './list-tutorial/list-tutorial.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectComponent } from './project/project.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'account', component: AccountComponent},
  { path: 'listProject', component: ListProjectComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'categoriesTutorials', component: CategoriesTutorialsComponent},
  { path: 'listTutorials', component: ListTutorialComponent},
  { path: 'tutorial', component: TutorialComponent},
  { path: 'article', component: ArticleComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }