import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CitaslistComponent } from './citaslist.component';

describe('CitaslistComponent', () => {
  let component: CitaslistComponent;
  let fixture: ComponentFixture<CitaslistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CitaslistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CitaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
