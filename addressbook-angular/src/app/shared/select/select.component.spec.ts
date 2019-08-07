import { TestBed, async } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectComponent,
      ],
      imports: [
        CommonModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SelectComponent);
    const select = fixture.debugElement.componentInstance;
    expect(select).toBeTruthy();
  });

  // it(`should have as title 'addressbook-angular'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('addressbook-angular');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to addressbook-angular!');
  // });
});
