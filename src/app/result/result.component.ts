import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
var myChart = new Chart("myChart", {
    type: 'bar',
    data: {
        labels: ['Congress', 'Cpim', 'Tmc', 'Dmk', 'AAP', 'Bjp'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(58, 250, 2)',
                'rgb(255, 0, 0)',
                'rgb(238, 250, 2)',
                'rgb(59, 40, 2)',
                'rgb(217, 40, 109)',
                'rgb(255, 125, 0)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var myChart = new Chart("pieChart", {
  type: 'pie',
  data: {
      labels: ['Congress', 'Cpim', 'Tmc', 'Dmk', 'AAP', 'Bjp'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgb(58, 250, 2)',
              'rgb(255, 0, 0)',
              'rgb(238, 250, 2)',
              'rgb(59, 40, 2)',
              'rgb(217, 40, 109)',
              'rgb(255, 125, 0)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});
  }

}
