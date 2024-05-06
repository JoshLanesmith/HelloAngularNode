import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataService]
})
export class AppComponent {
  title = 'my-angular-frontend';

  data: any[] = [];

  // private dataService: DataService = inject(DataService);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    console.log('ngOnInit()');
    
    this.dataService.getData().subscribe(data => {
      this.data = data;
    }, error => {
      console.error('There was an error retriving data:', error);
    })
  }
}
