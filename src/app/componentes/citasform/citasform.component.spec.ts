import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CitasformComponent } from './citasform.component';

describe('CitasformComponent', () => {
  let component: CitasformComponent;
  let fixture: ComponentFixture<CitasformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CitasformComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CitasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
