import { Component, Input } from '@angular/core';
import { ITabComponent } from '../Interfaces/interfaces';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements ITabComponent{

  inputControl: FormControl;
  @Input() IsActive: boolean = true;
  
  
  constructor(fb: FormBuilder){
    this.inputControl = fb.control('');
  }

  CanClose(): boolean {
    return true;
  }
}
