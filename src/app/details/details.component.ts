import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-details',
  imports: [JsonPipe, MatCardImage, NgIf, LoadingComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  public movie: MovieModel | null = null

  public constructor(private route: ActivatedRoute) {
    route.params.subscribe(params=>{
      MovieService.getMovieById(params['movieId']).then(rsp=>{
        this.movie = rsp.data
      })
    })
  }
}
