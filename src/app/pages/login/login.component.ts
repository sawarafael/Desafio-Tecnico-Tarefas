import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'adm';
  password = 'adm';

  enteredUsername: string = '';
  enteredPassword: string = '';

  loginError: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  async onSubmit() {
    console.log(this.username);
      if (this.username === this.enteredUsername && this.password === this.enteredPassword) {
        this.loginError = false;
        this.router.navigateByUrl('tarefas');
        console.log('Login efetuado com sucesso.');
      } else {
        this.loginError = true;
      }
  }

}
