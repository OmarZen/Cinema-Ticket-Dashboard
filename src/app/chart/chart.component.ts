import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {

  chartOptions: any;

  ngOnInit(): void {
    this.chartOptions = {
      xAxis: {
        type: 'category',
        data: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [150, 230, 224, 218, 135, 147, 260, 240, 270, 300, 340, 310],
        type: 'line',
        smooth: true,
        areaStyle: {}
      }],
      color: ['#8A74F9']
    };
  }

  // This function initializes the Echart after the component loads
  ngAfterViewInit(): void {
    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);
    myChart.setOption(this.chartOptions);
  }
}
