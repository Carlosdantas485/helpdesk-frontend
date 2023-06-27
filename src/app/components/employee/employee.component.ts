import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Tecnic } from 'src/app/models/tecnic';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent{
  ELEMENT_DATA: Tecnic[] = [
    {
      id: 1,
      name: 'CarlosAlberto Dantas Filho',
      cpf: '987654321',
      email: 'carlos@email.com',
      password: 'Test123*',
      profile:['0'],
      createDate: '15/08/2023'
    }
  ]
      
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = new MatTableDataSource<Tecnic>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

