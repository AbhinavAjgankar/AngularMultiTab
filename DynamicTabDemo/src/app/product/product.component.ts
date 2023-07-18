import { Component, Input } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { ITabComponent } from '../Interfaces/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements ITabComponent{
  inputControl: FormControl;
  @Input() IsActive: boolean = true;
  
  constructor(fb: FormBuilder){
    this.inputControl = fb.control('');
  }
  
  CanClose(): boolean {
    return true;
  }
}
