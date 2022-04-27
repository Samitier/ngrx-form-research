import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualAdapterComponent } from './visual-adapter.component';

describe('VisualAdapterComponent', () => {
  let component: VisualAdapterComponent;
  let fixture: ComponentFixture<VisualAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualAdapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
