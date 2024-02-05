import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatiComponent } from './cati.component';

describe('CatiComponent', () => {
  let component: CatiComponent;
  let fixture: ComponentFixture<CatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
