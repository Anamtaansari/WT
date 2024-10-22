import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user = {
    name: '',
    email: '',
    weight: '',
    goals: ''
  };

  constructor() {
    // Mock data for user profile
    this.user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      weight: '70 kg',
      goals: 'Lose 5 kg by the end of the month'
    };
  }

  updateProfile() {
    // Logic to update the profile goes here
    console.log('Profile updated:', this.user);
  }
}
// export class ProfileComponent {
//   profile: {
//     target: string;
//     startWeight: number;
//     startDate: string;
//     endDate: string;
//     status: string;
//   };

//   constructor() {
//     // Initialize the profile object
//     this.profile = {
//       target: '',
//       startWeight: 0,
//       startDate: '',
//       endDate: '',
//       status: 'active',
//     };
//   }

//   updateProfile() {
//     // Logic to update the profile (e.g., send to a server)
//     console.log('Profile updated:', this.profile);
//   }
// }