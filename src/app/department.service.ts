import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

   department = [
    {
      "id":1,
      "name":"MCA",
      "desc":"Good",
      "faculties":15,
      "type":'PG',
      "papers":12,
      "journals":26,
      "Hod":"Dr.A.Tamilarasi"
    },
    
    {
      "id":2,
      "name":"MBA",
      "desc":"Best",
      "faculties":16,
      "type":'PG',
      "papers":20,
      "journals":12,
      "Hod":"Dr.Somasundharam"
    },
    
    {
      "id":3,
      "name":"Msc",
      "desc":"Better",
      "faculties":10,
      "type":'PG',
      "papers":14,
      "journals":20,
      "Hod":"Dr.Unknown"
    }
  ]

  getDepartments = () =>{
    return this.department;
  }
  constructor() { }
}
