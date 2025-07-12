import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  imports: [FormsModule, InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  public userInput: string = '';

  onEnter() {
    this.userInput = "";
  }
}
