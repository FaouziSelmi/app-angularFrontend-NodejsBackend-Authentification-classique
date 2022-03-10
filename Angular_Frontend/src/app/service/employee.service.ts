import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURLget="http://localhost:3000/employees";
  private baseURLAdd="http://localhost:3000/addEmployee";
  private baseURLEdit="http://localhost:3000/editEmployee";
  private baseURLDelete="http://localhost:3000/deleteEmployee";
  private baseURLEmplDir="http://localhost:3000/employeesDirection";
  constructor(private httpClient: HttpClient) { }


  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]> (`${this.baseURLget}`);
  }

  createEmployee(employee:Employee): Observable<object>{
    return this.httpClient.post(`${this.baseURLAdd}`,employee);
  }
  getEmployeeById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURLget}/${id}`);
  }
  updateEmployee(id:number, employee:Employee): Observable<Object>{
   return this.httpClient.put(`${this.baseURLEdit}/${id}`,employee);
  }
  deleteEmployee(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURLDelete}/${id}`);
   }
   getEmployeeDirection(id:string):Observable<Employee[]>{
    return this.httpClient.get<Employee[]> (`${this.baseURLEmplDir}/${id}`);
  }
}
