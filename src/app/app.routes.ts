import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ActorsComponent } from './actors/actors.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'search', component: SearchComponent},
    {path: 'actors', component: ActorsComponent},
    {path: 'details/:movieId', component: DetailsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserComponent},
    {path: 'details/:movieId/order', component: OrderComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', redirectTo: ''}
];
