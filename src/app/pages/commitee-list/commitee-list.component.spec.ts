import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommiteeListComponent } from './commitee-list.component';

describe('CommiteeListComponent', () => {
  let component: CommiteeListComponent;
  let fixture: ComponentFixture<CommiteeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommiteeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommiteeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
