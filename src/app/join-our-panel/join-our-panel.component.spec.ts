import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JoinOurPanelComponent} from './join-our-panel.component';

describe('JoinOurPanelComponent', () => {
  let component: JoinOurPanelComponent;
  let fixture: ComponentFixture<JoinOurPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinOurPanelComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JoinOurPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
