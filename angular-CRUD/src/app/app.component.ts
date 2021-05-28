import { Component } from '@angular/core';
import {Empleado} from './models/empleado'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadoArray :Empleado[] = [
    {id:1, name:"Camilo", country:"Colombia"},
    {id:2, name:"Deyci", country:"Colombia"}
  ];
  // Doble enlace de datos para poder modificar los datos en tiempo real
  selectedEmpleado :Empleado = new Empleado();

  addOrEdit(){
    if(this.selectedEmpleado.id === 0){
      this.selectedEmpleado.id = this.empleadoArray.length + 1;
      this.empleadoArray.push(this.selectedEmpleado);
    }
    this.selectedEmpleado = new Empleado();
    //console.log("Bandera", this.empleadoArray);
  }

  openEdit(empleado: Empleado){
    this.selectedEmpleado = empleado;
  }

  detele(){
    if(confirm('Estas seguro de querer eliminar este registro?')){
      this.empleadoArray = this.empleadoArray.filter(x => x != this.selectedEmpleado);
      this.selectedEmpleado = new Empleado();
    }
  }
}
