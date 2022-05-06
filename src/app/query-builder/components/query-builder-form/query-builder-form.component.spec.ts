import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryBuilderFormComponent } from './query-builder-form.component';

describe('QueryBuilderFormComponent', () => {
  let component: QueryBuilderFormComponent;
  let fixture: ComponentFixture<QueryBuilderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryBuilderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryBuilderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
