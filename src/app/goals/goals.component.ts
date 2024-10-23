import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface Goal {
  targetGoal: string;
  startWeight: string;
  startDate: string;
  endDate: string;
  status: string;
}

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  standalone: true, // Indicating that this is a standalone component
  imports: [FormsModule, CommonModule] // Import FormsModule here
})
export class GoalsComponent {
  goals: Goal[] = [
    {
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
    }
  ];
  goal: Goal = {
    targetGoal: '',
    startWeight: '',
    startDate: '',
    endDate: '',
    status: ''
  };

  addGoal() {
    this.goals.push({ ...this.goal });
    this.goal = { targetGoal: '', startWeight: '', startDate: '', endDate: '', status: '' };
  }
}
