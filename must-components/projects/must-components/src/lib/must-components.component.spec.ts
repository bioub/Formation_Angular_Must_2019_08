import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MustComponentsComponent } from './must-components.component';

describe('MustComponentsComponent', () => {
  let component: MustComponentsComponent;
  let fixture: ComponentFixture<MustComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
