import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
departments = [];
  constructor(private _department : DepartmentService) { }

  ngOnInit() {
    this.departments = this._department.getDepartments();
  }

}
