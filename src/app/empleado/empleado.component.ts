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
  empresa="Google";

  cambiaEmpresa(event:Event){
      this.empresa=(<HTMLInputElement>event.target).value;
  }
  hcuadro=false;

  usuregistrado = false;

  textoRegistro="Sin registrado"

  getRegistroUsu(){
    this.usuregistrado=false;
  }

  setusuRegistrado(event:Event){
      //alert("El usuario se acaba de registrar");
      //this.textoRegistro = "El usuario se registro"
    //((<HTMLInputElement>event.target),value) Se genera un nuevo objeto.(casting)
    if ((<HTMLInputElement>event.target).value=="si"){
      this.textoRegistro="Usuario registrado";
    }else{  
      this.textoRegistro="No hay registrado";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
/*
  llamaEmpresa(value:string){

  }
*/

}
