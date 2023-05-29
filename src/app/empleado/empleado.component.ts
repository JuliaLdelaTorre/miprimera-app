import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];
  julia: Empleado = {
    nombre: 'Julia',
    apellido: 'López',
    edad: 30,
    empresa: 'Dedalus',
  };

  jose: Empleado = {
    nombre: 'Jose',
    apellido: 'Diaz',
    edad: 19,
    empresa: 'Dedalus',
  }
  
  habilitacionCuadro: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.empleados = [this.julia, this.jose];
  }

  getEdad(idEmpleado: Empleado['edad']) {
    // return this.edad;
    return;
  }

  llamaEmpresa(value: String) {
    // función para usar el botón con el evento click
  }
}

export interface Empleado {
  nombre: string;
  apellido: string;
  edad: number;
  empresa: string;
}
