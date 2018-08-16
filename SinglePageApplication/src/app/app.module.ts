import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { IndexComponent } from './components/index/index.component';
import { RouterModule} from '@angular/router';
import { AppRoutes} from './routes/app.routes';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { ChildThreeComponent } from './components/child-three/child-three.component';
import { AuthService } from './guards/auth.guards';


@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    IndexComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [AuthService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
