import { UsuarioService } from './usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revisao';
  retorno: any;

  constructor(private service: UsuarioService){}
  listar(): void{
    this.service.getAll().subscribe({
      next: (this.retorno = this.retorno)
    })
  }
}
