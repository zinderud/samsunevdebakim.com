import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 
import { SignupComponent } from './core/auth/signup.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { HizmetlerimizComponent } from './pages/hizmetlerimiz/hizmetlerimiz.component';
import { BizkimizComponent } from './pages/bizkimiz/bizkimiz.component';
import { AmacimizComponent } from './pages/amacimiz/amacimiz.component';
 import { TanismaComponent } from './pages/tanisma/tanisma.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/Anasayfa', pathMatch: 'full' },
  { path: 'Anasayfa', component: HomeComponent },
    { path: 'Hizmetlerimiz', component: HizmetlerimizComponent },
      { path: 'Bizkimiz', component: BizkimizComponent },
        { path: 'Amacimiz', component: AmacimizComponent },
               { path: 'Tanisma', component: TanismaComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'error-page', component: ErrorPageComponent }
  
];

export const AppRouterModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
