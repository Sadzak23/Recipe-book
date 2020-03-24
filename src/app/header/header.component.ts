import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() activeComponent = new EventEmitter<string>()

  onTabSelect = (tab: string) => {
    this.activeComponent.emit(tab)
  }
}
