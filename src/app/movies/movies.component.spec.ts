import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesDataService } from '../movies-data.service';

import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let service:MoviesDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(MoviesDataService)
    fixture.detectChanges();
  });

  it('should create inside movies component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getValue function from MoviesDataService inside ngOninit ',function(){
   //spy
   spyOn(service,"getValue")
   component.ngOnInit()
   expect(service.getValue).toHaveBeenCalled()
   expect(service.getValue).toHaveBeenCalledTimes(1)
  })
});
