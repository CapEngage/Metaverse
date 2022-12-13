import { Component, OnInit, ViewChild } from '@angular/core';
import {EmailCampaignService} from 'app/SERVICES/EmailCampaign.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-email-campaigns-list',
  templateUrl: './email-campaigns-list.component.html',
  styleUrls: ['./email-campaigns-list.component.scss']
})
export class EmailCampaignsListComponent implements OnInit {
 
  brandCode =  localStorage.getItem('brandCode');
  EmailCampaignData: any = [];
  dataSource: MatTableDataSource<Task>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
      'id', 'Action', 'title', 'type', 'status', 'tags', 'createdByUser', 'createdOn'
];
  constructor(private _EmailCampaignService : EmailCampaignService ) {
    let brandCode =  localStorage.getItem('brandCode');
    this._EmailCampaignService.getAllEmailCampaignByBrand(brandCode).subscribe((data) => {
      this.EmailCampaignData = data;
      this.dataSource = new MatTableDataSource<Task>(this.EmailCampaignData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
    console.log('Data loaded successfully' + this.dataSource);
    }
 ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteCampaign(index: number, e) {
    if (window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice(
        this.paginator.pageIndex * this.paginator.pageSize + index,
        1
      );
      this.dataSource.data = data;
      this._EmailCampaignService.deleteEmailCampaignById(e.id).subscribe();
    }
  }
}
