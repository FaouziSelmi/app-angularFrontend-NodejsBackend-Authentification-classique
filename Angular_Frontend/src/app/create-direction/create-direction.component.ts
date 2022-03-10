import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Direction } from '../entity/direction';
import { DirectionService } from '../service/direction.service';

@Component({
  selector: 'app-create-direction',
  templateUrl: './create-direction.component.html',
  styleUrls: ['./create-direction.component.css']
})
export class CreateDirectionComponent implements OnInit {

 direction: Direction= new Direction();
  constructor( private router: Router, private directionService: DirectionService) { }

  ngOnInit(): void {
  }

  onsubmit(nomDir:any){
    this.saveDirection();
    this.goToListeEmployee()
  }
  saveDirection(){
    this.directionService.createDirection(this.direction).subscribe(data =>{
      console.log(JSON.parse(JSON.stringify(data)));
     
    },
    error =>console.log(error));
        
  }
  goToListeEmployee(){
    this.router.navigate(['/employees'])
  }
}
