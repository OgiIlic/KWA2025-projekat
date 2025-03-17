import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import {MatSelectModule} from '@angular/material/select';
import { NgFor } from '@angular/common';
import { GenreModel } from '../../models/genre.model';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-signup',
  imports: [MatInputModule, NgFor, MatFormFieldModule, FormsModule, MatCardModule, RouterLink, MatButtonModule, MatButton, MatInputModule, MatSelectModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public genreList: GenreModel[] | null = null
  public email = ''
  public firstName = ''
  public lastName = ''
  public password = ''
  public repeatPassword = ''
  public phone = ''
  public address = ''
  public favoriteGenre = ''

  public constructor(private router: Router) {
    MovieService.getGenres()
    .then(rsp => this.genreList = rsp.data)
  }

  public doSignup() {
    if(this.email == '' || this.password == ''){
      alert('Molimo unesite polje za email i lozinku')
      return
    }


    if(this.password !== this.repeatPassword) {
      alert('Lozinke se ne poklapaju')
      return
    }

    const result = UserService.createUser({
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      address: this.address,
      favoriteGenre: this.favoriteGenre,
      orders: []
    })

    result ? this.router.navigate(['/login']) : alert('Email je već aktivan') 
  }

  
}
