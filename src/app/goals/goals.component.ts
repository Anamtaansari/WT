import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTab } from '@angular/material/tabs';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

export interface Goal {
  targetGoal: string;
  startWeight: string;
  startDate: string;
  endDate: string;
  status: string;
}

const WT_DATA: Goal[] = [ {
  targetGoal: 'Lose 5kg',
  startWeight: '70kg',
  startDate: '2023-10-01',
  endDate: '2023-12-01',
  status: 'in progress'
},
{
  targetGoal: 'Gain 3kg',
  startWeight: '65kg',
  startDate: '2023-08-15',
  endDate: '2023-09-15',
  status: 'completed'
},
{
  targetGoal: 'Maintain Weight',
  startWeight: '68kg',
  startDate: '2023-09-01',
  endDate: '2023-11-01',
  status: 'not started'
}];

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  standalone: true, // Indicating that this is a standalone component
  imports: [FormsModule, CommonModule, MatTableModule] // Import FormsModule here
})
export class GoalsComponent {
  displayedColumns: string[] = ['targetGoal', 'startWeight', 'startDate', 'endDate', 'status'];
  dataSource = new MatTableDataSource<Goal>(WT_DATA);

  goal: Goal = {
    targetGoal: '',
    startWeight: '',
    startDate: '',
    endDate: '',
    status: ''
  };
  addGoal() {
    const newGoal: Goal = {
      targetGoal: '',
      startWeight: '',
      startDate: '',
      endDate: '',
      status: ''
    };
    this.dataSource.data.push(newGoal);
    this.dataSource.data = this.dataSource.data.slice();
  }
}
