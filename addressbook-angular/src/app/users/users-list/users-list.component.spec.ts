import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiBaseUrlInterceptor } from 'src/app/core/api-base-url.interceptor';
import { UserService } from '../user.service';
import { of } from 'rxjs';

describe('UsersListComponent', () => {
  let httpTestingController: HttpTestingController;
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListComponent ],
      providers: [
        // {
        //   provide: UserService,
        //   useValue: {
        //     events$: of(),
        //     getAll$() {
        //       return of([{id: 123, name: 'TOTO'}]);
        //     }
        //   }
        // },
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   multi: true,
        //   useClass: ApiBaseUrlInterceptor,
        // }
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains users', () => {
    httpTestingController.expectOne('/users').flush([{id: 123, name: 'Titi'}]);

    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;

    expect(compiled.querySelector('.list-group-item').textContent).toContain('Titi');

    httpTestingController.verify();
  });
});
