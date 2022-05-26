import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  onLogin(usuario: string, senha: string):boolean {
    if ((usuario === 'admin') && (senha === '1234')){
      localStorage.setItem('usuario', usuario);
      return true;
    }else{
      return false;
    }

  }
  Autenticador():boolean {
    if(localStorage.getItem('usuario')){
      return true;
    }else{
      return false;
    }
  }
  onLogOff(){
    localStorage.clear()
    return true;
  }
}
