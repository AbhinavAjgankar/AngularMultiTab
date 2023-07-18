import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabControlComponent } from './tab-control.component';

describe('TabControlComponent', () => {
  let component: TabControlComponent;
  let fixture: ComponentFixture<TabControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabControlComponent]
    });
    fixture = TestBed.createComponent(TabControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
