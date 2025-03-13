import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { LoadingComponent } from "../loading/loading.component";
import { MatButton } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { UtilsService } from '../../services/utils.service';


@Component({
  selector: 'app-details',
  imports: [JsonPipe, MatCardImage, NgIf, NgFor,LoadingComponent, MatCardModule, MatButton, MatListModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  public movie: any | null = null

  public constructor(private route: ActivatedRoute, public utils: UtilsService) {
    route.params.subscribe(params=>{
      MovieService.getMovieById(params['movieId']).then(rsp=>{
        this.movie = rsp.data
      })
    })
  }
}
