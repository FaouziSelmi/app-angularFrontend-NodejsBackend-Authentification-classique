import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../entity/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = new User();
 erreur=0;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onLoggedin(){
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    console.log("valid user "+isValidUser);
    if (isValidUser)
    {
      //console.log("isadmin "+this.authService.isAdmin());
      this.router.navigate(['/']);     
    }
      else
      //  Swal.fire('Non connecté','Login ou mot de passe incorrecte!','error');
     this.erreur=1;
    
  }

}
