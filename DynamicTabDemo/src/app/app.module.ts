import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabControlComponent } from './tab-control/tab-control.component';
import { TabItemHeaderComponent } from './tab-item-header/tab-item-header.component';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    TabControlComponent,
    TabItemHeaderComponent,
    UserComponent,
    BookComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
