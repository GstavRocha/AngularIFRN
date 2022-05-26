import { LoginService } from './../login.service';
import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuarioSelecionado?: Usuario;

  constructor(private servico: UsuarioService, private router: Router, private login: LoginService) { }

  ngOnInit(): void {
    this.servico.getAll().subscribe({
      next: retorno => this.usuarios = retorno
    });
  }

  onRowSelect(event: any): void {
    console.log(event);
    this.router.navigate(['/detalhe', this.usuarioSelecionado?.id]);
  }
  onLogOff(){
    if (this.login.onLogOff()){
      this.router.navigate(['/login']);
    }
  }
}
