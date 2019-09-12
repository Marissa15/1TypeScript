import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-arrayobjetos',
  templateUrl: './arrayobjetos.component.html',
  styleUrls: ['./arrayobjetos.component.css']
})

export class ArrayobjetosComponent implements OnInit {
  constructor() { }

  public alumnos: Array<Alumno> = [
  {id: 1, nombre: 'Juan', apellidos: 'Camaney', ciudad: 'Los Mochis'},
  {id: 2, nombre: 'Pedro', apellidos: 'Infante', ciudad: 'Guamuchil'}
];

  ngOnInit() {
  }

}
