import { Component, input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { OrderModel } from '../../models/order.model';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserModel } from '../../models/user.model';
import { MatTableModule } from '@angular/material/table';
import { UtilsService } from '../../services/utils.service';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { GenreModel } from '../../models/genre.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-user',
  imports: 
  [NgIf, NgFor, MatButtonModule, MatCardModule, MatTableModule, RouterLink,
    MatExpansionModule, MatAccordion, MatFormFieldModule, MatInputModule,
    FormsModule, MatSelectModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  public displayedColumns: string[] = ['title', 'count', 'pricePerCard', 'price', 'status', 'actions']
  public user: UserModel | null = null
  public userCopy: UserModel | null = null
  public newPasswordValue = ''
  public repeatPasswordValue= ''
  public genreList: GenreModel[] | null = null

  constructor(private router: Router, public utils: UtilsService) {
    if(!UserService.getActiveUser()) {
      //Vrati korisnika na home page
      router.navigate(['/home'])
      return
    }

    this.user = UserService.getActiveUser()
    this.userCopy = UserService.getActiveUser()
    MovieService.getGenres()
    .then(rsp => this.genreList = rsp.data)
  }

  public doUpdateInfo() {
    if(this.userCopy == null){
      alert('Korisnik nije definisan')
      return
    }
    UserService.updateUser(this.userCopy)
    this.user = UserService.getActiveUser()
    alert('Korisnik je uspešno ažuriran')
  }
  public doChangePassword() {
    if(this.newPasswordValue == '' || this.newPasswordValue == null) {
      alert('Password cant be empty')
      return
    }

    if(this.newPasswordValue !== this.repeatPasswordValue) {
      alert('Lozinke se ne poklapaju')
      return
    }

    alert(UserService.changePassword(this.newPasswordValue)?'Lozinka promenjena uspešno': 'Failed to change password')
    }

  public doPay(order: OrderModel) {
    order.status = 'paid'
    if(UserService.changeOrderStatus('paid', order.id)){
      this.user = UserService.getActiveUser()
    }
  }

  public doCancel(order: OrderModel) {
    order.status = 'canceled'
    if(UserService.changeOrderStatus('canceled', order.id)){
      this.user = UserService.getActiveUser()
    }
  }

  public doRate(order: OrderModel, r: boolean) {
    if(UserService.changeRating(r, order.id)) {
      this.user = UserService.getActiveUser()
    }
  }
}

