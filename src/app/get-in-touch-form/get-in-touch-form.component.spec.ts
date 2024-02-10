import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GetInTouchFormComponent} from './get-in-touch-form.component';

describe('GetInTouchFormComponent', () => {
  let component: GetInTouchFormComponent;
  let fixture: ComponentFixture<GetInTouchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetInTouchFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GetInTouchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
