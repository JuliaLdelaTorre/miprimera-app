import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit, OnDestroy {
  private saludo$ = new Subject<string>();
  private borrar$ = new Subject<number>();
  // private saludo2$ = new BehaviorSubject<string>('');

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
  };

  agus: Empleado = {
    nombre: 'Agustin',
    apellido: 'Diez',
    edad: 29,
    empresa: 'Dedalus',
  };

  habilitacionCuadro: boolean = false;

  constructor() {}


  ngOnDestroy(): void {
    this.borrar$.unsubscribe()
    this.saludo$.unsubscribe()
  }

  ngOnInit(): void {
    this.empleados = [this.julia, this.jose, this.agus];
    this.saludo$.subscribe((e) => console.log(e));
    this.borrar$.subscribe((id) => this.empleados.splice(id, 1));
  }

  saludar(saludo: string) {
    this.saludo$.next(saludo);
  }

  borrarUsuario(id: number) {
    this.borrar$.next(id);
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
