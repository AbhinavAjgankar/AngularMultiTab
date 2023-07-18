import { Component } from '@angular/core';
import { TabService } from './sevices/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicTabDemo';

  constructor(private tabService: TabService){}

  InsertComponent(ComponentName: string){
    this.tabService.tabItemObservable.next(ComponentName)
  }
}
