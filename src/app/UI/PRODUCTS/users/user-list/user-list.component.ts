import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from 'app/Services/User.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  UserData: any = [];
  brandCode =  localStorage.getItem('brandCode');
  dataSource: MatTableDataSource<Task>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
      'id', 'Action', 'Name', 'Email', 'Phone', 'CreatedAt'
];
  constructor(private _UserService : UserService, private activatedRoute: ActivatedRoute, private router: Router ) {
    let brandCode =  localStorage.getItem('brandCode');
    //let BrandCode = this.activatedRoute.snapshot.paramMap.get('brandCode');

    this._UserService.getAllUserById(brandCode).subscribe((data) => {
      this.UserData = data;
      console.log(this.UserData)
      this.dataSource = new MatTableDataSource<Task>(this.UserData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
    // this.router.navigate([`dash/${brandCode}/users/list/`, brandCode])
    console.log(this.UserData);
  }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

