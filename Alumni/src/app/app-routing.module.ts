import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ApploginNavbarComponent } from './applogin-navbar/applogin-navbar.component'
import { LayoutComponent } from './layout/layout.component'
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'userpage', component: UserpageComponent },
    { path: 'login' , component: ApploginNavbarComponent},
    // { path: 'dashboard/applogin-navbar/userpage' , loadChildren: './userpage/userpage.module#UserpageModule'},
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    // { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    // { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
