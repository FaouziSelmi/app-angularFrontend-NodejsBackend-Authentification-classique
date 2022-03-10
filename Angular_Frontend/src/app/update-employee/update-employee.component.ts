import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Direction } from '../entity/direction';
import { Employee } from '../entity/employee';
import { DirectionService } from '../service/direction.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
 id:number;
  employee: Employee=new Employee();
  public directions: Direction[];
  constructor(private router:Router, private directionService: DirectionService,
    private employeeService: EmployeeService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.getDirections();
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data[0];
      console.log(data);
    }, error =>console.log(error)
    );
  }
  onsubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data =>{
      this.goToListeEmployee()
    }, error =>console.log(error));
    
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
