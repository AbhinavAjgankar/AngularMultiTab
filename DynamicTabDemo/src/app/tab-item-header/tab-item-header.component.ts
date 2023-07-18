import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tab-item-header',
  templateUrl: './tab-item-header.component.html',
  styleUrls: ['./tab-item-header.component.css']
})
export class TabItemHeaderComponent implements OnChanges{
  
  @Input() Header: string = '';
  @Input() UniqueCode:string = '';
  @Input() IsActive: boolean = true;
  @HostBinding('class') hostclass: string = '';
  
  @Output() CloseTab: EventEmitter<string> = new EventEmitter();

  @HostListener('click') onHostSelected(){
    this.Selected.emit(this.UniqueCode)
  }
  @Output() Selected: EventEmitter<string> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['IsActive'] != undefined){
      if(changes['IsActive'].currentValue == true){
        this.hostclass = 'active';
      }
      else{
        this.hostclass = '';
      }
    }
  }

  TabClose(){
      this.CloseTab.emit(this.UniqueCode);
  }

}
