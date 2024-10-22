import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoalsComponent } from './goals/goals.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
// import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, GoalsComponent, SettingsComponent, MatIconModule, MatToolbarModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wt';

  constructor(private _dialog: MatDialog) {}

  openLoginForm(){
    this._dialog.open(LoginComponent);
  }
  openRegisterForm(){
    this._dialog.open(RegisterComponent);
  }

}

// export const routes: Routes = [
//   { path: 'goals', component: GoalsComponent },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'settings', component: SettingsComponent }
// ];
