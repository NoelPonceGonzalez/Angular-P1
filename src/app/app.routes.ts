import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { GeneralPageComponent } from './components/general-page/general-page.component';
import { RegisterComponent } from './components/register/register.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FomrAddProyectComponent } from './components/fomr-add-proyect/fomr-add-proyect.component';

export const routes: Routes = [{path: 'login', component: LoginComponent},
                              {path: '', component: GeneralPageComponent},
                              {path: 'register', component: RegisterComponent},
                              {path: 'proyects', component: ProyectsComponent},
                              {path: 'formProyects', component: FomrAddProyectComponent},
];
