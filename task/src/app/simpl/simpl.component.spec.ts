import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplComponent } from './simpl.component';

describe('SimplComponent', () => {
  let component: SimplComponent;
  let fixture: ComponentFixture<SimplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
