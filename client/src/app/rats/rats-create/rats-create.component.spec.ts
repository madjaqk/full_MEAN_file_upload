import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatsCreateComponent } from './rats-create.component';

describe('RatsCreateComponent', () => {
  let component: RatsCreateComponent;
  let fixture: ComponentFixture<RatsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
