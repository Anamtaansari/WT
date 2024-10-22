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
  goals: Goal[] = [];
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
