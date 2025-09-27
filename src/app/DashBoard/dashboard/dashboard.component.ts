import { Component, OnInit } from '@angular/core';
import { Chart, ChartTypeRegistry } from 'chart.js/auto';
import { ClientService } from 'src/app/Services/client.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  endDate: any = new Date();
  startDate: any = new Date(new Date().setDate(this.endDate.getDate() - 30));

  constructor(private clientService: ClientService, private datePipe: DatePipe) {
    this.endDate = datePipe.transform(this.endDate, 'yyyy-MM-dd');
    this.startDate = datePipe.transform(this.startDate, '2012-11-11');

  }

  ngOnInit(): void {
    this.loadBarChart();

  }

  onDateChange() {
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);
  }

  /**********************************Get Transaction Types*************************************************************************** */

  itemTypeData: any;
  selectedTranType: string = 'Invoice';
  barChart: any;
  tranDate: any;
  selectedTranDate: string = '';


 








  /*******************************************************Display Bar Chart********************************************************************* */





  keys: any;
  results: any;
  monthlyData: number[] = new Array(12).fill(0);

  loadBarChart() {
    if (this.barChart) {
      this.barChart.destroy();
    }

    const obj = {
      recordName: 'transacation_dashboard',
      tranType: this.selectedTranType,
      year: this.selectedYear
    };

    this.clientService.getRecord(obj).subscribe({
      next: (data) => {
        const months = [
          'January', 'February', 'March', 'April', 'May',
          'June', 'July', 'August', 'September', 'October',
          'November', 'December'
        ];

        const monthlyAmounts: number[] = new Array(12).fill(0);
        if (Array.isArray(data) && data.length > 0) {
          data.forEach((entry: any) => {
            if (!entry.trandate) {
              console.warn('Missing transaction date in entry:', entry);
              return;
            }
            const transactionDate = this.parseDate(entry.trandate, 'DD/MM/YYYY');
            const transactionAmount = Number(entry.amount) || 0;
          
            if (transactionDate && transactionDate.getFullYear() === Number(this.selectedYear) && entry.trantype === this.selectedTranType) {
              const monthIndex = transactionDate.getMonth();
              monthlyAmounts[monthIndex] += transactionAmount;
            }
          });
          
        }

        this.barChart = new Chart('myChartTest', {
          type: this.selectedGraphType as keyof ChartTypeRegistry || 'bar',
          data: {
            labels: months,
            datasets: [{
              label: `${this.selectedTranType} - ${this.selectedYear}`,
              data: monthlyAmounts,
              backgroundColor: this.getBackgroundColors(),
              borderColor: this.getBorderColors(),
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              datalabels: {
                color: '#000',
                anchor: 'end',
                align: 'end',
                formatter: (value) => `$ ${value.toFixed(2)}`,
                font: { size: 12 }
              },
              legend: {
                display: true,
                position: 'top',
                labels: {
                  font: {
                    size: 18, // Increase the font size for legend labels
                    weight: 'bold' // Make it bold (optional)
                  },
                  color: '#333' // Set text color for the legend labels
                }
              }
            },
            scales: {
              x: { beginAtZero: true },
              y: { beginAtZero: true }
            }
          },

          plugins: [ChartDataLabels]
        });
      },
      error: (err) => {
        console.error('Error fetching transaction data:', err);
      }
    });
  }



  parseDate(dateString: string, format: string): Date | null {
    if (!dateString || typeof dateString !== 'string') {
      console.error(`Invalid date: ${dateString}`);
      return null;
    }
    const [day, month, year] = dateString.split('/').map(Number);
    if (!day || !month || !year) {
      console.error(`Invalid date format: ${dateString}`);
      return null;
    }
    return new Date(year, month - 1, day);
  }
  



  /*******************************************Fill colour for Chart Coloumn**************************************************************** */
  getBackgroundColors() {
    return [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(100, 149, 237, 0.2)',
      'rgba(144, 238, 144, 0.2)',
      'rgba(255, 182, 193, 0.2)',
      'rgba(210, 105, 30, 0.2)',
      'rgba(176, 196, 222, 0.2)',
      'rgba(218, 165, 32, 0.2)'
    ];
  }

  getBorderColors() {
    return [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(100, 149, 237, 1)',
      'rgba(144, 238, 144, 1)',
      'rgba(255, 182, 193, 1)',
      'rgba(210, 105, 30, 1)',
      'rgba(176, 196, 222, 1)',
      'rgba(218, 165, 32, 1)'
    ];
  }

  selectedGraphType: string = '';
  setGraphType(type: string) {
    this.selectedGraphType = type;
    this.loadBarChart();
  }

  /**********************************************Change Type and Date**************************************************************** */

  years: any;
  selectedYear: string = '2016';
  currentYear: string = new Date().getFullYear().toString();
  onYearChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedYear = target.value;
    this.loadBarChart();
  }

  onTranTypeChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log("Selected Transaction Type:", selectedValue);

    this.selectedTranType = selectedValue;
    this.loadBarChart();
  }




}
/*********************************************************************************************************************************************** */