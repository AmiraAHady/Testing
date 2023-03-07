import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { FirstComponent } from './first.component';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test that num value become 100 after call changnum function',function(){
     expect(component.num).toEqual(10)
     component.changeNum()
     expect(component.num).toEqual(10)
  })

  it('test that num value become 100 after call changnum async function ',fakeAsync(()=>{
      expect(component.num).toEqual(10);
      component.changeNum()
      tick(3000)
      expect(component.num).toEqual(100)
  }))
});



