import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationEventComponent } from './creation-event.component';

describe('CreationEventComponent', () => {
  let component: CreationEventComponent;
  let fixture: ComponentFixture<CreationEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationEventComponent]
    });
    fixture = TestBed.createComponent(CreationEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
