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

  // Default user data with more fields
  user = {
    fname: 'Jane',
    lname: 'Doe',
    email: 'jane.doe@example.com',
    phone: '123-456-7890',
    // address: '123 Main St, Anytown, USA',
    // bio: 'I am a software developer with a passion for learning new technologies.'
  };

  // Function to save profile
  saveProfile() {
    alert(
      `Profile saved!\nFirst Name: ${this.user.fname}\nLast Name: ${this.user.lname}\nEmail: ${this.user.email}\nPhone: ${this.user.phone}`
    );
  }
}