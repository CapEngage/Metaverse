import { Component, OnInit, ViewChild } from '@angular/core';
import {SmsAutomationService} from 'app/_Services/sms-automation.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sms-campaigns-list',
  templateUrl: './sms-campaigns-list.component.html',
  styleUrls: ['./sms-campaigns-list.component.scss']
})

export class SmsCampaignsListComponent implements OnInit {

   brandCode =  localStorage.getItem('brandCode');
    

  SmsCampaignData: any = [];
  dataSource: MatTableDataSource<Task>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
      'id', 'Action', 'title', 'type', 'status', 'tags', 'createdByUser', 'createdOn'
];
  constructor(private _SmsAutomationService : SmsAutomationService ) {
    this._SmsAutomationService.getSmsCampaigns().subscribe((data) => {
      this.SmsCampaignData = data;
      this.dataSource = new MatTableDataSource<Task>(this.SmsCampaignData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
    console.log(this.SmsCampaignData);
    
  }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
