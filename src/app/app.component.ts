import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to Angular Schulung';
  imgSrc = 'https://travellersarchive.de/wp-content/uploads/sites/2/2020/09/rostock-sehenswuerdigkeiten-slider.jpg';
  headerClass = 'success';
  today = new Date();
  myNumber: number = 10;

  onClick(): void {
    console.log('button clicked');
    this.myNumber++;
  }
}