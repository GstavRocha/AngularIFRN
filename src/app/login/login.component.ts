import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';
  mensagemErro = '';
  constructor(private servico: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    if (this.servico.onLogin(this.usuario,this.senha)){
      this.router.navigate(['/.'])
    }else{
      this.mensagemErro = 'Usuário errado ou senha errada'
    }
  }

}
