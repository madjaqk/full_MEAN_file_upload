import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatsDetailsComponent } from './rats-details.component';

describe('RatsDetailsComponent', () => {
  let component: RatsDetailsComponent;
  let fixture: ComponentFixture<RatsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
