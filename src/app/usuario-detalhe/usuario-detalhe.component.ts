import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {

  id = 0;
  usuario?: Usuario;

  constructor(private activeRoute: ActivatedRoute, private servico: UsuarioService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id') ?
      parseInt(this.activeRoute.snapshot.paramMap.get('id')!) : 0;

    this.servico.getById(this.id).subscribe({
      next: (usuarioRetorno: Usuario) => this.usuario = usuarioRetorno
    });
  }

}
