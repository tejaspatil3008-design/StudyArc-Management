import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data_Residency';

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken'); // Replace with actual auth logic
  }
}
