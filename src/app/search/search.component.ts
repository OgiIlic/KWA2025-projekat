import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MovieModel } from '../../models/movie.model';
import { NgFor, NgIf } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MatButtonModule } from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { GenreModel } from '../../models/genre.model';
import { MovieGenresModel } from '../../models/movieGenres.model';

@Component({
  selector: 'app-search',
  imports: [
    MatTableModule, NgFor, NgIf, MatButtonModule, LoadingComponent,
    RouterLink, MatInputModule, MatFormFieldModule, FormsModule, MatCardModule,
    MatSelectModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  displayedColumns: string[] = ['movieId', 'title', 'originalTitle', 'director.name', 'startDate', 'actions']
  allData: MovieModel[] | null = null
  dataSource: MovieModel[] | null = null
  search = ''
  directorList: string[] = []
  selectedDirector: string | null = null
  userInput: string = ''
  dateOptions: string[] = []
  selectedDate: string | null = null


  public constructor(public utils: UtilsService, private router: Router) {
    MovieService.getMovies().then(
      rsp => {
        this.allData = rsp.data
        this.dataSource = rsp.data
        this.generateSearchCriteria(rsp.data)
      })
  }

  public generateSearchCriteria(source: MovieModel[]) {
    this.directorList = source.map(obj => obj.director.name)
      .filter((director: string, i: number, ar: any[]) => ar.indexOf(director) === i)
    this.dateOptions = source.map(obj => obj.startDate)
      .map((obj: string) => obj.split('T')[0])
      .filter((date: string, i: number, ar: any[]) => ar.indexOf(date) === i)
  }

  public doResetAll() {
    this.userInput = ''
    this.selectedDirector = null
    this.dataSource = this.allData
    this.selectedDate = null
    this.generateSearchCriteria(this.allData!)
  }

  public doFilterChain() {
    if (this.allData == null) return

    this.dataSource = this.allData!
      .filter(obj => {
        if (this.userInput == '') return true
        return obj.title.toLowerCase().includes(this.userInput) || obj.movieId.toString().includes(this.userInput)
          || obj.director.name.toLowerCase().includes(this.userInput)
      })
      .filter(obj => {
        if (this.selectedDirector == null) return true
        return obj.director.name === this.selectedDirector
      })
      .filter(obj => {
        if (this.selectedDate == null) return true
        const start = new Date(`${this.selectedDate}T00:00:01`)
        const end = new Date(`${this.selectedDate}T23:59:59`)
        const startDate = new Date(obj.startDate)

        return (start <= startDate) && (startDate <= end)
      })

      this.generateSearchCriteria(this.dataSource)
  }
}
