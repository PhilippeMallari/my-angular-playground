import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookCardComponent } from "./book-card/book-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookCardComponent, BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-playground-july-2024';
}
