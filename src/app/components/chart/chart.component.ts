import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as ApexCharts from 'apexcharts';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit{
  selectedCity: string = '';
  months: { name: string }[] = [
    { name: 'سنويا' },
    { name: 'شهريا' },
    { name: 'يوميا' },
  ];
  allData: User[] = [];
  seriesData = [
    150, 350, 150, 450, 250, 350, 200, 350, 150, 250, 450, 200,
  ];

  constructor(private _usersService: UsersService) {}

  ngOnInit(): void {
    this.getData()
  }


  getData(){
this._usersService.getUsers().subscribe({
  next:(data)=>{
    this.allData = data
    this.seriesData=[];
    this.allData.forEach((item)=>{
    this.seriesData.push(item.rating.count);
  });
  this.generateChart();
  },

  error:(err)=>{
    console.log(err);

  }
})
  }

  generateChart() {

    const categories = [

      'أغسطس',
      'يوليو',
      'يونيو',
      'مايو',
      'أبريل',
      'مارس',
      'فبراير',
      'يناير',
      'ديسمبر',
      'نوفمبر',
      'أكتوبر',
      'سبتمبر',
      'أغسطس',
      'يوليو',
      'يونيو',
      'مايو',
      'أبريل',
      'مارس',
      'فبراير',
      'يناير',
    ];

    const chartOptions: ApexCharts.ApexOptions = {
      chart: {
        type: 'area',
        height: 232,
        foreColor: '#9291A5',
        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
        },
      },
      series: [
        {
          name: `استخدام`,
          data: this.seriesData,
        },
      ],
      xaxis: {
        categories: categories,
        axisBorder: {
          show: true,
        },
        tooltip:{

          style:{
            fontFamily: 'Neo Sans Arabic',
            fontSize: "12px",

          }
        },
        axisTicks:{
          show:false
        },
        labels:{
          show:true,
        style:{
          fontWeight:500
        }
        },

      },
      yaxis: {
        tickAmount: 4,
        show: false,
        max: 679,
        forceNiceScale: true,
        labels: {
          formatter: (value: number) => `${value} `,
        },
      },
      legend: {
        show: false,
        position: 'top',
      },
      colors: ['#8A74F9'],
      markers: {},

      tooltip: {
        enabled: true,
        shared: true,
        theme:"dark",
        followCursor: false,
        hideEmptySeries: true,
        onDatasetHover: {
          highlightDataSeries:true,
        },
        custom: function ({ series, seriesIndex, dataPointIndex }) {

          return (
            `<div class="p-2 rounded-3 fw-medium" style="background-color:#1E1B39">

            <div>إستخدام ${series[seriesIndex][dataPointIndex]} </div>
            <div style="color:#8a74f9; font-size:8.07px;">1.3% </div>

            </div>`
          );
        },
        style: {
          fontSize: '12px',
          fontFamily: 'Neo Sans Arabic',
        },
        y: {
          title: {
            formatter(seriesName) {
              return ' ' + seriesName;
            },
          },
        },
        x:{
          show:true,

        }
      },
      title: {
        text: 'إحصائيات استخدام القسيمة',
        align: 'right',
        offsetX: -150,
        offsetY: 0,
        floating: false,
        margin: 0,
        style: {
          fontSize: '14px',
          fontWeight: 400,
          color: '#1C1C28',
          fontFamily: 'Neo Sans Arabic',
        },
      },
      subtitle: {
        align: 'right',
        text: '05 يوليو , 2023 - 05 أغسطس , 2023',
        offsetX: -190,
        offsetY: 18,
        style: {
          fontFamily: 'Neo Sans Arabic',
          color: '#99A1B7',
          fontWeight: 400,
        },
      },

      plotOptions: {

        bar: {
          dataLabels: {
            total: {

              enabled: false,
            },
            maxItems: 12,

          },
        },
      },
      dataLabels: {
        enabled: false,
      },

    };

    const chartElement = document.querySelector('#chart');
    const chart = new ApexCharts.default(chartElement, chartOptions);
    chart.render();
  }
}
