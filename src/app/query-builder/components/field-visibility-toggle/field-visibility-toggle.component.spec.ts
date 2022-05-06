import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldVisibilityToggleComponent } from './field-visibility-toggle.component';

describe('FieldVisibilityToggleComponent', () => {
  let component: FieldVisibilityToggleComponent;
  let fixture: ComponentFixture<FieldVisibilityToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldVisibilityToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldVisibilityToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
