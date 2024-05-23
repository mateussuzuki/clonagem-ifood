import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderCategoriesComponent } from './components/header-categories/header-categories.component';
import { TopicsHeaderComponent } from './components/topics-header/topics-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderCategoriesComponent,
    TopicsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
