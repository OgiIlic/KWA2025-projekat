import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, Router } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatCardModule, RouterLink, MatButtonModule, MatButton, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public email: string = ''
  public password: string = ''

  constructor(private router: Router) {
    if(UserService.getActiveUser()) {
      router.navigate(['/user'])
      return
    }
  }

  public doLogin() {
    if(UserService.login(this.email, this.password)) {
      //Redirect to user component
      this.router.navigate(['/user'])
      return
    }

    alert('Bad email or password')
  }
}
