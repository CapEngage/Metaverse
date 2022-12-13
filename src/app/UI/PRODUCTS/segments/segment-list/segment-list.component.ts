import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SegmentService } from 'app/SERVICES/Segment.service';
import { FuseConfirmationService } from '@CapEngage/services/confirmation';

@Component({
  selector: 'app-segment-list',
  templateUrl: './segment-list.component.html',
  styleUrls: ['./segment-list.component.scss']
})
export class SegmentListComponent implements OnInit {
  SegmentData: any = [];
  
  dataSource: MatTableDataSource<Task>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
      'id',
      'Action',
      'name',
      'campaignCount',
      'journeyCount',
      'createdByUser',
      'createdOn',
 ];
  constructor(
    private _SegmentService: SegmentService,
    private _fuseConfirmationService: FuseConfirmationService,
    
  ) {
    this._SegmentService.getAllSegmentById().subscribe((data) => {
      this.SegmentData = data;
      this.dataSource = new MatTableDataSource<Task>(this.SegmentData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
    console.log(this.dataSource);
  }

  /**
   * On init
   */
  ngOnInit(): void {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteTask(): void
  {
      // Open the confirmation dialog
      const confirmation = this._fuseConfirmationService.open({
          title  : 'Delete task',
          message: 'Are you sure you want to delete this task? This action cannot be undone!',
          actions: {
              confirm: {
                  label: 'Delete'
              }
          }
      });
    }
}
