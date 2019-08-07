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

  it('should create app-select', () => {
    const fixture = TestBed.createComponent(SelectComponent);
    const select = fixture.debugElement.componentInstance;
    expect(select).toBeTruthy();
  });

  it('should have correct defaults', () => {
    const fixture = TestBed.createComponent(SelectComponent);
    const select = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    expect(select.opened).toBe(false);
    expect(select.selected).toBe('Rouge');
    expect(select.items).toEqual(['Rouge', 'Vert', 'Bleu']);
  });

  it('should contains selected @Input', () => {
    const fixture = TestBed.createComponent(SelectComponent);
    const select: SelectComponent = fixture.debugElement.componentInstance;

    select.selected = 'Toto';

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.selected').textContent).toContain('Toto');
  });

  it('should emit selectedChange @Ouput', () => {
    const fixture = TestBed.createComponent(SelectComponent);
    const select: SelectComponent = fixture.debugElement.componentInstance;

    select.opened = true;

    fixture.detectChanges();

    select.selectedChange.subscribe((selected) => {
      expect(selected).toBe('Bleu');
    });

    const compiled: HTMLElement = fixture.debugElement.nativeElement;

    const event = document.createEvent('MouseEvent');
    event.initEvent('click');
    compiled.querySelector('.item:last-child').dispatchEvent(event);

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
