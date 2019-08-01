import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments = [];

  constructor(private _department : DepartmentService) { }

  ngOnInit() {
    this.departments = this._department.getDepartments();
  }

}
