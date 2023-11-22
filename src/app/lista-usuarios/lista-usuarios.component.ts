// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Usuario } from '../usuario';

// @Component({
//   selector: 'app-lista-usuarios',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './lista-usuarios.component.html',
//   styleUrl: './lista-usuarios.component.css'
// })
// export class ListaUsuariosComponent{

//   usuarios:Usuario[];

//   constructor(){ }

//   ngOnInit(): void{
//     this.usuarios = [{
//       "login":"yefersito",
//       "clave":"123456789",
//       "nombreUsuario": "yeferson Alejandro",
//       "apellidoUsuario": "Acosta Millan",
//       "tipoUsuario": 2,
//       "fechaUltimaClave": "12/12/2022",
//       "intentos": 1,
//       "fechaUltimoIngreso":"12/12/2022",
//       "nombreCorto": "yefersito",
//       "estado": "A"
//     },
//     {
//       "login":"juan",
//       "clave":"123454321",
//       "nombreUsuario": "Juan pedro",
//       "apellidoUsuario": "Aristisibal Hernandez",
//       "tipoUsuario": 1,
//       "fechaUltimaClave": "02/01/2022",
//       "intentos": 2,
//       "fechaUltimoIngreso":"04/11/2023",
//       "nombreCorto": "Juansito",
//       "estado": "C"
//     }
//   ]
//   }
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent{

  usuarios:Usuario[];

  constructor(private usuarioServicio : UsuarioService){ }

  ngOnInit(): void{
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaDeUsuarios().subscribe(dato =>{
      this.usuarios = dato;
    })
  }
}