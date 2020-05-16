import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { ErrorComponent } from './components/error/error.component';
import { ResultsComponent } from './components/results/results.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserComponentComponent,
    ErrorComponent,
    ResultsComponent,
    NavBarComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
