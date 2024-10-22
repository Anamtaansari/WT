import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Properties that you may want to display on the dashboard
  userName = 'John Doe';
  currentWeight = 75;  // Example weight in kg
  targetWeight = 70;
  progress = 30;  // Example progress in percentage

  // Methods to calculate or update progress, etc.
  calculateProgress(): number {
    return (this.currentWeight - this.targetWeight) / this.currentWeight * 100;
  }
}
