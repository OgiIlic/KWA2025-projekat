import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ActorsComponent } from './actors/actors.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'search', component: SearchComponent},
    {path: 'actors', component: ActorsComponent},
    {path: 'details/:movieId', component: DetailsComponent},
    {path: '**', redirectTo: ''}
];
