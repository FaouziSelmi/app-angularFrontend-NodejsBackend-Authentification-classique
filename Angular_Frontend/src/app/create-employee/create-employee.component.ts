import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../entity/employee';
import { Direction } from '../interface/direction.interface';
import { DirectionService } from '../service/direction.service';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  public directions: Direction[];
  public idDirection:number;
  employee: Employee=new Employee();
  
  constructor(private employeeService: EmployeeService, private directionService: DirectionService,
    private router: Router) { }

  ngOnInit(): void {
   this.getDirections();
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(JSON.parse(JSON.stringify(data)));
     
    },
    error =>console.log(error));
        
  }
  onsubmit(firstName: any, lastName:any, emailId: any, idDir:any){
    this.saveEmployee();
    this.goToListeEmployee();
  }
  goToListeEmployee(){
    this.router.navigate(['/employees'])
  }
  private getDirections(){
    this.directionService.getDirectionList().subscribe(data=>{
      this.directions=data;
      console.log("the data is "+ data);
    })
    }
}
