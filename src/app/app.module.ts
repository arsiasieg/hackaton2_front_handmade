import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { ProjectComponent } from './project/project.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { CategoriesTutorialsComponent } from './categories-tutorials/categories-tutorials.component';
import { ListTutorialComponent } from './list-tutorial/list-tutorial.component';
import { ArticleComponent } from './article/article.component';
import { AppRoutingModule } from './app-routing.module';
import { GreenBannerComponent } from './green-banner/green-banner.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    ListProjectComponent,
    ProjectComponent,
    TutorialComponent,
    CategoriesTutorialsComponent,
    ListTutorialComponent,
    ArticleComponent,
    GreenBannerComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    DragScrollModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
