import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArrayComponent } from './create-array.component';

describe('CreateArrayComponent', () => {
  let component: CreateArrayComponent;
  let fixture: ComponentFixture<CreateArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
