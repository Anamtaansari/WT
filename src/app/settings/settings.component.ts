import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, MatListModule, MatSidenavModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  settings = {
    notification: true,
    privacy: 'public',
    theme: 'light'
  };

  saveSettings() {
    // Logic to save settings goes here
    console.log('Settings saved:', this.settings);
  }
}
