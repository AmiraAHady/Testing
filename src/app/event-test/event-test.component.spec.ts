import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EventTestComponent } from './event-test.component';

describe('EventTestComponent', () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;
  let de:DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTestComponent);
    component = fixture.componentInstance;
    de=fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increse countClicks by 1 after cliking on button with id btnAddClick',function(){
    let btn=de.query(By.css("#btnAddClick"));
    btn.triggerEventHandler("click");
    expect(component.countClicks).toEqual(1)
  })
  it('should decrese countClicks by 1 after cliking on button with id btnRemoveClick',function(){
    let btn=de.query(By.css("#btnRemoveClick"));
    btn.triggerEventHandler("click");
    expect(component.countClicks).toEqual(-1)
  })
  it('test that h1 bind countClicks correctly',function(){
    let btn=de.query(By.css("#btnAddClick"));
    let h1Element=de.query(By.css('h1'));
    btn.triggerEventHandler("click");
    fixture.detectChanges()
    // expect(component.countClicks).toEqual(1)
    expect(h1Element.nativeElement.textContent).toEqual("1")
  })
});
