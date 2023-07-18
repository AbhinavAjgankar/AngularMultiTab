import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabItemHeaderComponent } from './tab-item-header.component';

describe('TabItemHeaderComponent', () => {
  let component: TabItemHeaderComponent;
  let fixture: ComponentFixture<TabItemHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabItemHeaderComponent]
    });
    fixture = TestBed.createComponent(TabItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
