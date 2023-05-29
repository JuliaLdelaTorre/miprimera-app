import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent {
  nombre = 'Julia';

  apellido = 'López';

  edad = 30;

  /*empresa="Dedalus";

  
   private edad=30; si usara un modificador de acceso private, me crearía el getter para poder acceder desde fuera de este archivo ts.

  getEdad(){
    return this.edad;
  }*/

  /*llamaEmpresa(value:String) { función para usar el botón con el evento click

} */

  habilitacionCuadro = false;
}
