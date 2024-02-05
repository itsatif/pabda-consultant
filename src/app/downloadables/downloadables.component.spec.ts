import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadablesComponent } from './downloadables.component';

describe('DownloadablesComponent', () => {
  let component: DownloadablesComponent;
  let fixture: ComponentFixture<DownloadablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
