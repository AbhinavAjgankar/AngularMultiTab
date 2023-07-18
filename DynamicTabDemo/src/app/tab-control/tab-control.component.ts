import { Component, OnDestroy, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ITab, ITabComponent } from '../Interfaces/interfaces';
import { Subscription } from 'rxjs';
import { TabService } from '../sevices/tab.service';
import { UserComponent } from '../user/user.component';
import { BookComponent } from '../book/book.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-tab-control',
  templateUrl: './tab-control.component.html',
  styleUrls: ['./tab-control.component.css']
})
export class TabControlComponent implements OnDestroy{
  
  tabItemSubscription:Subscription;
  index: number = 0;
  Tab: ITab[] = [];

  TabNames: any = {
    User: 'User',
    Book: 'Book',
    Product: 'Product'
  }
  
  @ViewChild('containerRef', {read: ViewContainerRef, static: true})
  containerRef!: ViewContainerRef

  constructor(private tabServices: TabService){

    this.tabItemSubscription = tabServices.tabItemObservable.subscribe({
      next: (res:string) => {
        this.AddNewTab(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  AddNewTab(Code: string){
    var uniquecode = Code +'_'+ this.index;
    this.index++;

    this.containerRef.detach();
    var Component = this.containerRef.createComponent(
      this.GetComponentType(Code)
    );
    Component.instance.IsActive = true;
    //this.containerRef.get(0);

    for(let tab of this.Tab){
      tab.content.instance.IsActive = false;
    }

    this.Tab.unshift({
      headerName: Code,
      UniqueCode: uniquecode,
      content: Component,
      view: this.containerRef.get(0)!
    })
  }

  ngOnDestroy(): void {
   this.tabItemSubscription.unsubscribe(); 
  }

  GetComponentType(Code:string): Type<any>{
    let type: Type<any> = UserComponent;
  
    switch (Code) {
      case this.TabNames.User: {
        type = UserComponent;
        break;
      }
      case this.TabNames.Book: {
        type = BookComponent;
        break;
      }
      case this.TabNames.Product: {
        type = ProductComponent;
        break;
      }
    }

    return type;
  }

  // CloseComponent(componentName:string){
  //   if(this.components.has(componentName)){
  //       this.components.get(componentName)?.destroy();
  //       this.components.delete(componentName); 
  //   }
  // }

  selectedTab(uniquecodeEvent: string){
    for(let tab of this.Tab){
      if(tab.UniqueCode == uniquecodeEvent)
      {
        tab.content.instance.IsActive = true;
        this.containerRef.detach();
        this.containerRef.insert(tab.view)
      }
      else{
        tab.content.instance.IsActive = false;
      }
        
    }
  }

  FuncTabClose(uniquecodeEvent: string){
    var tabToclose: ITab | null = null;
    var index = -1;

    for(let i=0; i<this.Tab.length; i++){
      if(this.Tab[i].UniqueCode == uniquecodeEvent)
      {
        tabToclose = this.Tab[i];
        index = i;
      }        
    }

    var component = tabToclose?.content.instance as ITabComponent;

    if(component.CanClose()){
      this.RemoveTab(tabToclose!, index);
    }
  }

  RemoveTab(tabtoremove: ITab, index: number){
    debugger
    if(tabtoremove.content.instance.IsActive){
      tabtoremove.content.instance.IsActive = false;

      this.Tab.splice(index, 1);
      this.containerRef.detach();

      if(this.Tab.length > 0){
        if(index == this.Tab.length){
          this.Tab[index - 1].content.instance.IsActive = true;
          this.containerRef.insert(this.Tab[index - 1].view);
        }
        else{
          this.Tab[index].content.instance.IsActive = true;
          this.containerRef.insert(this.Tab[index].view);
        }
      }
    }
    else{
      this.Tab.splice(index, 1);
    }
  }

}
