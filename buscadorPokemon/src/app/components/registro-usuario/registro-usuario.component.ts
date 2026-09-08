import { ThisReceiver } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'

//Primera tarea definir el modelo de datos

export interface Usuario {
  id: number;
  nombreCompleto: string; 
  documento: {
  tipo: string;
  num: number;
        };
  celu: string;
  fecha_nac: Date;
  ubicacion: { 
  pais: string;   
  ciudad: string;
        };
  tratamientos: boolean;
};
//hasta aqui el modelado

// Sigue el component, me ayuda a tener toda la log

@Component({
  selector: 'app-registro-usuario',
  standalone: true, //Declara que un componente es autonomo, esto por lo general es una buena parcticar colocar un componente sea autonomo
  imports: [FormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {

  //Vamos a aplicarle una inicializacon con signal

  nombre = signal('');
  apellido = signal('');
  identificacion = signal('CC');
  num = signal('');
  nac = signal('');
  celu = signal('');
  fecha_nacimiento= signal('');
  correo = signal('');
  pais = signal('');
  ciudad = signal('');
  datos = signal('False');

  ultimoUsuario = signal<Usuario | null>(null);

  guardarUsuario() {
    if (this.datos()){
      alert('Debes aceptar el tratamiento de datos personales');
      return;
    }

    const usuarioCreado = {
        id: Date.now(),
        nombreCompleto: `${this.nombre()}, ${this.apellido()}`, 
        documento: {
            tipo: this.identificacion(),
            num: this.num()
        },
        celular: this.celu(),
        fecha_nac: this.fecha_nacimiento(),
        ubicacion: { 
            pais: this.pais(),     
            ciudad: this.ciudad()
        },
        tratamientos: this.datos(),
  }

  localStorage.setItem(usuarioCreado.id.toString(),JSON.stringify(usuarioCreado));  

  this.ultimoUsuario.set(usuarioCreado); 
  }   
}
