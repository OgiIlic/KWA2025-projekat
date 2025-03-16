import { Component, input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { OrderModel } from '../../models/order.model';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserModel } from '../../models/user.model';
import { MatTableModule } from '@angular/material/table';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-user',
  imports: [NgIf, MatButtonModule, MatCardModule, MatTableModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  public displayedColumns: string[] = ['title', 'count', 'pricePerCard', 'price', 'status', 'rating', 'actions']
  public user: UserModel | null = null

  constructor(private router: Router, public utils: UtilsService) {
    if(!UserService.getActiveUser()) {
      //Vrati korisnika na home page
      router.navigate(['/home'])
      return
    }

    this.user = UserService.getActiveUser(  )
  }

  public doChangePassword() {
    const newPassword = prompt('Enter your new password')
    if(newPassword == '' || newPassword == null) {
      alert('Password cant be empty')
      return
    }
    alert(UserService.changePassword(newPassword)?'Password chaned successfully': 'Failed to change password')
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

