import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-segment-dashboard',
  templateUrl: './segment-dashboard.component.html',
  styleUrls: ['./segment-dashboard.component.scss']
})
export class SegmentDashboardComponent implements OnInit {


  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  SegmentsData: any = [];
  dataSource: MatTableDataSource<Task>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
      '_id',
      'name',
      
      'campaignCount',
      'journeyCount',
      'createdOn',
      'updatedAt',
     
  ];
  constructor(
    
    
  ) {
    

    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  
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
}
