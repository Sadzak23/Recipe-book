import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeTab: string = "recipes"

  onTabSelected = (tab: string) => {
    this.activeTab = tab
  }
}
