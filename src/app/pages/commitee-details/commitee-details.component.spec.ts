import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommiteeDetailsComponent } from './commitee-details.component';

describe('CommiteeDetailsComponent', () => {
  let component: CommiteeDetailsComponent;
  let fixture: ComponentFixture<CommiteeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommiteeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommiteeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
