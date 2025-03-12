import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { AxiosError } from 'axios';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [JsonPipe, NgIf, NgFor, MatCardModule, MatButtonModule, LoadingComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies: any | null = null
  error: string | null = null 

  constructor(public utils: UtilsService) {
    MovieService.getMovies(0, 3)
    .then(rsp=>this.movies = rsp.data)
    .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`)
  }

}
