import { Component, input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { OrderModel } from '../../models/order.model';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user',
  imports: [NgIf, NgFor, MatButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  public orders: OrderModel[] = []

  constructor(private router: Router) {
    if(!UserService.getActiveUser()) {
      //Vrati korisnika na home page
      router.navigate(['/home'])
      return
    }

    this.orders = UserService.getActiveUser()!.orders
  }

  public doChangePassword() {
    const newPassword = prompt('Enter your new password')
    if(newPassword == '' || newPassword == null) {
      alert('Password cant be empty')
      return
    }
    alert(UserService.changePassword(newPassword)?'Password chaned successfully': 'Failed to change password')
    }
}

