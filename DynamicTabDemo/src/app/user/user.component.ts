import { Component, Input  } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { ITabComponent } from '../Interfaces/interfaces';
import { TabService } from '../sevices/tab.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements ITabComponent{
  inputControl: FormControl;
  
  @Input() IsActive: boolean = true;
  
  constructor(fb: FormBuilder, private tabservice: TabService){
    this.inputControl = fb.control('');
  }

   CreateBook(){
    this.tabservice.addNewTab('Book');
   }
   
   CanClose(): boolean {
    return true;
  }
}
