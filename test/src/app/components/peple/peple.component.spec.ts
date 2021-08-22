import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepleComponent } from './peple.component';

describe('PepleComponent', () => {
  let component: PepleComponent;
  let fixture: ComponentFixture<PepleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PepleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
