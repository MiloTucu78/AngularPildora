import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //Esto es para generar un componente inline
  //template:"<p>Aqui va empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color:red;}"]

})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";
  apellido="Perez";
  edad=21;
  //empresa="Tucuman";
 
  hcuadro=false;

  usuregistrado = false;

  getRegistroUsu(){
    this.usuregistrado=true;
  }

  constructor() { }

  ngOnInit(): void {
  }
/*
  llamaEmpresa(value:string){

  }
*/

}
